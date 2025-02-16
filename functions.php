<?php
/**
 * beard functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package beard
 */

if ( ! function_exists( 'beard_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function beard_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on beard, use a find and replace
	 * to change 'beard' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'beard', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Theme Logo
	 */
	add_theme_support( 'custom-logo' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'team', '600', '600', true );
	add_image_size( 'snap', '1200', '900', true );
	add_image_size( 'feat', '1920', '1080', true );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', 'beard' ),
		'menu-2' => esc_html__( 'Footer', 'beard' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
}
endif;
add_action( 'after_setup_theme', 'beard_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function beard_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'beard_content_width', 640 );
}
add_action( 'after_setup_theme', 'beard_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function beard_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'beard' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'beard' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'beard_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function beard_scripts() {
	wp_enqueue_style( 'beard-style', get_stylesheet_uri() );
	wp_enqueue_style( 'beard-gfont', "https://fonts.googleapis.com/css?family=Montserrat:400,600" );
	wp_enqueue_style( 'beard-font', "https://use.typekit.net/mal8icp.css" );

	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'beard-map', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDghRTYRnA6R3P1LJ6wJP4AjTFoDsva0jk','','',true );
	wp_enqueue_script( 'beard-fa', 'https://use.fontawesome.com/releases/v5.0.4/js/all.js','','',true );
	wp_enqueue_script( 'beard-ha', '//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.min.js','','',true );
	wp_enqueue_script( 'beard-lz', '//cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/8.6.0/lazyload.min.js','','',true );

	wp_enqueue_script( 'beard-pace', get_template_directory_uri() . '/assets/js/pace.min.js','','',true );
	wp_enqueue_script( 'beard-matchHeight', get_template_directory_uri() . '/assets/js/jquery.matchHeight.js','','',true );
	
	wp_enqueue_script( 'beard-morphext', get_template_directory_uri() . '/assets/js/morphext.min.js','','',true );
	wp_enqueue_script( 'beard-nav', get_template_directory_uri() . '/assets/js/navigation.js','','',true );
	wp_enqueue_script( 'beard-js', get_template_directory_uri() . '/assets/js/stache.js','','',true );
	
	if (is_page( 'work-with-us' )) {
		wp_enqueue_script( 'fform-js', get_template_directory_uri() . '/assets/js/fform.js','','',true );
	}
}
add_action( 'wp_enqueue_scripts', 'beard_scripts' );


/**
 * GMAPS API for ACF Pro
 * AIzaSyDghRTYRnA6R3P1LJ6wJP4AjTFoDsva0jk
 */
function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyDghRTYRnA6R3P1LJ6wJP4AjTFoDsva0jk');
}

add_action('acf/init', 'my_acf_init');

/**
 * TYPEKIT
 */
function beard_typekit() {
?>
<script>
  (function(d) {
    var config = {
      kitId: 'ybl7ozu',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
<?php
}
//add_action('wp_head', 'beard_typekit', 99);

/**
 * Custom post types.
 */
require get_template_directory() . '/inc/cpts.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
