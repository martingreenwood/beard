<?php
/**
 * The template for displaying the contact page
 * 
 * @package beard
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main container narrow" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'contact' );

			endwhile;
			?>

		</main>
	</div>

	<?php get_template_part( 'template-parts/content', 'repeat' ); ?>

	<?php 
	$location = get_field('office_location');
	if( !empty($location) ):
	?>

	<div id="map" data-zoom="13" data-map-info="WEAREBEARD HQ" data-map-color="#020100" data-map-saturation="-50" data-map-lightness="" data-map-scroll="false" data-map-drag="true" data-map-zoom-control="true" data-map-double-click="false" data-map-default="true">
			<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>" data-icon="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/placeholder.png"></div>
	</div>

	<?php endif; ?>

<?php
get_footer();
