<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package beard
 */
?>
<!-- 
	Built by Martin Greenwood
	Lead Developer at WEAREBEARD
-->
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class($pagename); ?> id="thebody">
<div id="page" class="site">

	<?php 
	$terms = wp_get_post_terms( $post->ID, 'project-attribute' );
	$header_mode = "";
	$highlight_color = "";
	$header_mode = get_field( 'header_mode' );
	$highlight_color = get_field( 'highlight_colour' );
	?>
	<header id="masthead" class="<?php echo $header_mode; ?> site-header" role="banner">
		<div class="new-container">
			<!-- <div class="row"> -->
				<div class="site-branding">
					<?php if ( function_exists( 'the_custom_logo' ) ): ?>
						<?php the_custom_logo(); ?>
					<?php endif; ?>
				</div>
				<nav id="site-navigation" class="main-navigation" role="navigation">
					<button class="menu-toggle menu-icon dark">
					  <span <?php if($highlight_color): ?>style="background-color: <?php echo $highlight_color; ?>"<?php endif; ?>></span>
					  <span <?php if($highlight_color): ?>style="background-color: <?php echo $highlight_color; ?>"<?php endif; ?>></span>
					  <span <?php if($highlight_color): ?>style="background-color: <?php echo $highlight_color; ?>"<?php endif; ?>></span>
					  <span <?php if($highlight_color): ?>style="background-color: <?php echo $highlight_color; ?>"<?php endif; ?>></span>
					</button>
					<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>

					<div id="sentence-wrapper" class="animated fadeIn delay11 hide">
						<?php 
						$base_slogans = get_field( 'slogans', 'options' );
						shuffle($base_slogans);
						
						$slogans = "beard";
						if($base_slogans)
						{
							foreach($base_slogans as $base_slogan)
							{
								$slogans .= " | " . $base_slogan['slogan'];
							}
						}
						?>
						<h2>We Are 
							<span id="js-rotating">
								<?php echo $slogans; ?>
							</span>
						</h2>
					</div>

					<div class="socialites">
						<ul>
							<li><a href="https://www.facebook.com/wearebeard" target="_blank" title=""><i class="fab fa-facebook"></i></a></li>
							<li><a href="https://www.instagram.com/wearebeard/" target="_blank" title=""><i class="fab fa-instagram"></i></a></li>
							<li><a href="https://www.linkedin.com/company/2166784/" target="_blank" title=""><i class="fab fa-linkedin"></i></a></li>
							<li><a href="https://twitter.com/wearebeard" target="_blank" title=""><i class="fab fa-twitter-square"></i></a></li>
						</ul>
					</div>

				</nav>
			<!-- </div> -->
		</div>
	</header>

	<div id="content" class="site-content">
