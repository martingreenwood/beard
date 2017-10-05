<?php
/**
 * beard Theme Customizer
 *
 * @package beard
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function beard_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
}
add_action( 'customize_register', 'beard_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function beard_customize_preview_js() {
	wp_enqueue_script( 'beard_customizer', get_template_directory_uri() . '/js/customizer-min.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'beard_customize_preview_js' );
