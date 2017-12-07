<?php
/**
 * The template for displaying the contact page
 * 
 * @package beard
 */

get_header(); ?>

	<?php 
	$featureimage = wp_get_attachment_url( get_post_thumbnail_id());
	?>
	<!-- <section id="feature-image" class="parallax-window" data-bleed="50" data-parallax="scroll" data-image-src="<?php echo $featureimage; ?>">
		<div class="caption table">
			<div class="cell bottom">
				<div class="wrapper">
					<h1><?php the_title(); ?></h1>
					<hr>
					<h2><?php the_field( 'sub_heading' ); ?></h2>
				</div>
			</div>
		</div>
	</section> -->

	<div id="primary" class="content-area">
		<main id="main" class="site-main container narrow" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'contact' );

			endwhile;
			?>

		</main>
	</div>

	<div id="sections">

		<div class="row">

			<div class="wrapper">
				<div class="table">
					<div class="cell middle">

						<div class="half">
							<img src="http://local.wearebeard.com/wp-content/uploads/2017/11/example5.jpg" alt="">
						</div>
						
						<div class="half text">
							<?php the_content( ); ?>
						</div>

					</div>
				</div>
			</div>

		</div>

		<div class="row">

			<div class="wrapper">
				<div class="table">
					<div class="cell middle">

						<div class="half text">
							<h2>Send us an Email</h2>
							<?php 
							$form_object = get_field('contact_form');
							gravity_form_enqueue_scripts($form_object['id'], true);
							gravity_form($form_object['id'], false, false, false, '', true, 1); 
							?>
						</div>

						<div class="half">
							<img src="http://local.wearebeard.com/wp-content/uploads/2017/11/example2.jpg" alt="">
						</div>

					</div>
				</div>
			</div>

		</div>

	</div>

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
