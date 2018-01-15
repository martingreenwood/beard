<?php
/**
 * The front page template file
 *
 * @package beard
 */

get_header(); ?>


	<?php 
	// $featureimage = wp_get_attachment_url( get_post_thumbnail_id($post->ID));
	?>
	<section id="feature-image" class="">
		<div class="table">
			<div class="cell middle">
				<div class="wrap">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/background.jpg" alt="" class="desktop">	
					<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/background-mobile.jpg" alt="" class="mobile">	

					<div class="elements" id="elements">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/tree.png" alt="" class="desktop">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/tree-mobile.png" alt="" class="mobile">
						
						<div class="rock">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rock.png" alt="" class="desktop">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rock-mobile.png" alt="" class="mobile">
						</div>

						<div class="baloon" id="baloon">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/balloon.png" alt="">
						</div>
					
						<div class="wally">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/wally.png" alt="">
						</div>

						<!-- <div class="tenticle-right">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/tentacle-right.png" alt="">
						</div> -->

						<div class="camera">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/camera.png" alt="">
						</div>
						
						<div class="drip">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/drip.png" alt="">
						</div>

						<div class="rgl-1">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rgl-1.png" alt="">
						</div>
						<div class="rgl-2">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rgl-2.png" alt="">
						</div>
						<div class="rgl-3">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rgl-3.png" alt="">
						</div>

						<div class="rgl-4">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rgl-4.png" alt="">
						</div>
						<div class="rgl-5">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rgl-5.png" alt="">
						</div>
						<div class="rgl-6">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rgl-6.png" alt="">
						</div>


						<div class="flr">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/flr.png" alt="">
						</div>
						<div class="lr">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/lr.png" alt="">
						</div>
						<div class="rr">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rr.png" alt="">
						</div>
						<div class="frr">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/frr.png" alt="">
						</div>

						<div class="note1">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/note1.png" alt="">
						</div>
						<div class="note2">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/note2.png" alt="">
						</div>

					</div>
				</div>
			</div></div>
	</section>

	<div id="primary" class="content-area section dark">
		<main id="main" class="site-main" role="main">

		<?php
		if ( have_posts() ) :

			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'home' );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->

		<section id="offerings">
			<div class="container ">
				<div class="slick">
				<?php
				if( have_rows('feature_content') ):
					while ( have_rows('feature_content') ) : the_row();
						$title = get_sub_field('title');
						$link = get_sub_field('link');
						$text = get_sub_field('text');
						?>
						<div class="offering">
							<a href="<?php echo $link; ?>">
								<h2><?php echo $title; ?></h2>
								<?php echo $text; ?>
							</a>
						</div>
						<?php
					endwhile;
				endif;
				?>
				</div>
			</div>
		</section>

	</div>

<!-- 	<section id="featurework">
		<div class="container">

			<div class="feature-work-item">
				<a href="<?php home_url( 'studio' ); ?>">
					<img src="http://local.wearebeard.com/wp-content/uploads/2017/11/studio.jpg" alt=""> 

					<div class="info">
						<div class="table"><div class="cell middle">
							<h2>The Studio</h2>
							<hr>
							<h3>Meet The Team</h3>
						</div></div>
					</div>
				</a>
			</div>

			<div class="feature-work-item">
				<a href="<?php home_url( 'studio' ); ?>">
					<img src="http://local.wearebeard.com/wp-content/uploads/2017/11/dave.jpg" alt=""> 

					<div class="info">
						<div class="table"><div class="cell middle">
							<h2>What We Do</h2>
							<hr>
							<h3>Our Offerings</h3>
						</div></div>
					</div>
				</a>
			</div>

		</div>
	</section> -->

	<div id="brands" class="section light">
		<div class="container">
		<?php $brands = get_field('brands', 'options'); if( $brands ): ?>
			<div class="brandicons">
			<?php foreach( $brands as $brand ): ?>
				<div class='brandicon'>
					<img src="<?php echo $brand['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				</div>
			<?php endforeach; ?>
			</div>
		<?php endif; ?>
		</div>
	</div>

<?php
get_footer();
