<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package beard
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function beard_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'beard_body_classes' );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function beard_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'beard_pingback_header' );


/**
 * Adds options page for ACF
 */

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
}


// Usage:
// get_id_by_slug('any-page-slug');

function get_id_by_slug($page_slug) {
	$page = get_page_by_path($page_slug);
	if ($page) {
		return $page->ID;
	} else {
		return null;
	}
}


function get_pretty_dates($date) {
		$return = '';
		// $date = strtotime($date);
		$diff = time() - $date;
		
		if ($diff < 86400) {
			if ($diff < 3600) { // Output e.g. 35 minutes ago
				$return = $mins = floor($diff / 60);
				$return .= ' minute';
				if ($mins > 1 || $mins === 0) $return .= 's';
				$return .= ' ago';
			}
			else { // Output e.g. 5 hours ago
				$return = $hours = floor($diff / 3600);
				$return .= ' hour';
				if ($hours > 1 || $hours === 0) $return .= 's';
				$return .= ' ago';
			}
		}
		else { // Output e.g. 1 Dec
			$return = date('j M', $date);
		}
		
		return $return;
}