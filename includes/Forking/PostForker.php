<?php
namespace TenUp\PostForking\Forking;

use \Exception;
use \InvalidArgumentException;
use \WP_Error;

use \TenUp\PostForking\Posts;
use \TenUp\PostForking\Helpers;
use \TenUp\PostForking\Forking\AbstractForker;
use \TenUp\PostForking\Posts\Statuses\DraftForkStatus;

/**
 * Class to manage post forking.
 */
class PostForker extends AbstractForker {

	/**
	 * Fork a post along with it's meta data and taxonomy associations.
	 *
	 * @param  int|\WP_Post $post
	 * @return boolean|\WP_Error
	 */
	public function fork( $post ) {
		try {
			if ( true !== $this->can_fork( $post ) ) {
				throw new Exception(
					'Post could not be forked.'
				);
			}

			$forked_post_id = $this->fork_post( $post );

			if ( true !== Helpers\is_valid_post_id( $forked_post_id ) ) {
				throw new Exception(
					'Post could not be forked.'
				);
			}

			return $forked_post_id;

		} catch ( Exception $e ) {
			\TenUp\PostForking\Logging\log_exception( $e );

			return new WP_Error(
				'post_forker',
				$e->getMessage()
			);
		}
	}

	/**
	 * Fork post data.
	 *
	 * @param  int|\WP_Post $post
	 * @return int|\WP_Error The forked post ID, if successful.
	 */
	public function fork_post( $post ) {
		try {
			$post = Helpers\get_post( $post );

			if ( true !== Helpers\is_post_or_post_id( $post ) ) {
				throw new InvalidArgumentException(
					'Post could not be forked because it is not a valid post object or post ID.'
				);
			}

			do_action( 'post_forking_before_fork_post', $post );

			$forked_post    = $this->prepare_post_data_for_fork( $post );
			$forked_post_id = wp_insert_post( $forked_post, true );

			if ( is_wp_error( $forked_post_id ) ) {
				throw new Exception(
					'Post could not be forked: ' . $forked_post_id->get_error_message()
				);
			}

			if ( true !== Helpers\is_valid_post_id( $forked_post_id ) ) {
				throw new Exception(
					'Post could not be forked.'
				);
			}

			$this->copy_post_meta( $post, $forked_post_id );
			$this->copy_post_terms( $post, $forked_post_id );

			do_action( 'post_forking_after_fork_post', $forked_post_id, $post );

			return $forked_post_id;

		} catch ( Exception $e ) {
			\TenUp\PostForking\Logging\log_exception( $e );

			return new WP_Error(
				'post_forker',
				$e->getMessage()
			);
		}
	}

	/**
	 * Copy the post meta from the original post to the forked post.
	 *
	 * @param  int|\WP_Post $post The original post ID or object
	 * @param  int|\WP_Post $forked_post The forked post ID or object
	 * @return int|\WP_Error The number of post meta rows copied if successful.
	 */
	public function copy_post_meta( $post, $forked_post ) {
		try {
			$post        = Helpers\get_post( $post );
			$forked_post = Helpers\get_post( $forked_post );

			if (
				true !== Helpers\is_post( $post ) ||
				true !== Helpers\is_post( $forked_post )
			) {
				throw new InvalidArgumentException(
					'Could not fork post meta because the posts given were not valid.'
				);
			}

			$result = Helpers\clear_post_meta( $forked_post ); // Clear any existing meta data first to prevent duplicate rows for the same meta keys.

			do_action( 'post_forking_before_fork_post_meta', $forked_post, $post );

			$result = Helpers\copy_post_meta( $post, $forked_post );

			do_action( 'post_forking_after_fork_post_meta', $forked_post, $post, $result );

			return $result;

		} catch ( Exception $e ) {
			\TenUp\PostForking\Logging\log_exception( $e );

			return new WP_Error(
				'post_forker',
				$e->getMessage()
			);
		}
	}

	/**
	 * Copy the taxonomy terms from the original post to the forked post.
	 *
	 * @param  int|\WP_Post $post The original post ID or object
	 * @param  int|\WP_Post $forked_post The forked post ID or object
	 * @return int|\WP_Error The number of taxonomy terms copied to the destination post if successful.
	 */
	public function copy_post_terms( $post, $forked_post ) {
		try {
			$post        = Helpers\get_post( $post );
			$forked_post = Helpers\get_post( $forked_post );

			if (
				true !== Helpers\is_post( $post ) ||
				true !== Helpers\is_post( $forked_post )
			) {
				throw new InvalidArgumentException(
					'Could not fork post terms because the posts given were not valid.'
				);
			}

			do_action( 'post_forking_before_fork_post_terms', $forked_post, $post );

			$result = Helpers\copy_post_terms( $post, $forked_post );

			do_action( 'post_forking_after_fork_post_terms', $forked_post, $post );

			return $result;

		} catch ( Exception $e ) {
			\TenUp\PostForking\Logging\log_exception( $e );

			return new WP_Error(
				'post_forker',
				$e->getMessage()
			);
		}
	}

	/**
	 * Prepare the post data to be forked.
	 *
	 * @param  int|\WP_Post $post The post ID or object we're forking.
	 * @return array The post data for the forked post.
	 */
	public function prepare_post_data_for_fork( $post ) {
		try {
			$post = Helpers\get_post( $post );

			if ( true !== Helpers\is_post( $post ) ) {
				throw new InvalidArgumentException(
					'Could not prepare the forked post data because the original post is not a valid post object or post ID.'
				);
			}

			$post_status = $this->get_draft_fork_post_status();
			if ( empty( $post_status ) ) {
				throw new Exception(
					'Could not prepare the forked post data because the correct post status could not be determined.'
				);
			}

			$forked_post_data = $post->to_array(); // Get the post data as an array.

			$excluded_columns = $this->get_columns_to_exclude();
			foreach ( (array) $excluded_columns as $column ) {
				if ( array_key_exists( $column, $forked_post_data ) ) {
					unset( $forked_post_data[ $column ] );
				}
			}

			$forked_post_data['post_parent'] = $post->ID;
			$forked_post_data['post_status'] = $post_status;

			return $forked_post_data;

		} catch ( Exception $e ) {
			\TenUp\PostForking\Logging\log_exception( $e );

			return array();
		}
	}

	public function get_draft_fork_post_status() {
		return DraftForkStatus::get_name();
	}

	/**
	 * Get the columns that should be ignored when forking a post.
	 *
	 * @return array
	 */
	public function get_columns_to_exclude() {
		return array(
			'ID',
			'post_date',
			'post_date_gmt',
			'post_parent',
			'post_modified',
			'post_modified_gmt',
			'guid',
			'post_category',
			'tags_input',
			'tax_input',
		);
	}

	/**
	 * Determine if a post can be forked.
	 *
	 * @param  int|\WP_Post $post
	 * @return boolean
	 */
	public function can_fork( $post ) {
		return true === \TenUp\PostForking\Posts\post_can_be_forked( $post );
	}

	/**
	 * Determine if a post has an open fork.
	 *
	 * @param  int|\WP_Post $post
	 * @return boolean
	 */
	public function has_fork( $post ) {
		return true === \TenUp\PostForking\Posts\post_has_open_fork( $post );
	}
}
