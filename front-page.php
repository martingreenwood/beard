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
					<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/background.jpg" alt="">	

					<div class="elements" id="elements">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/tree.png" alt="">
						
						<div class="rock">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/hp/rock.png" alt="">
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

	<div id="primary" class="content-area section">
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
			<div class="container wide">
				<?php
				if( have_rows('feature_content') ):
				while ( have_rows('feature_content') ) : the_row();
					$title = get_sub_field('title');
					$link = get_sub_field('link');
					$text = get_sub_field('text');
					?>
					<div class="offering span4">
						<h2><a href="<?php echo $link; ?>"><?php echo $title; ?></a></h2>
						<?php echo $text; ?>
						<a class="more" href="<?php echo $link; ?>">Find Out More</a>
					</div>
					<?php
				endwhile;
				endif;
				?>
			</div>
		</section>

	</div>

	<!-- <section id="worktitle">
		<div class="container">
			<div class="row">
				<h2>Featured Projects</h2>
			</div>
		</div>
	</section> -->

	<section id="featurework">
		<div class="row">
		<?php //feature_work ?>
		<?php $i = 1; $work = new WP_Query( array( 'post_type' => 'portfolio', 'posts_per_page' => 4, 'meta_key' => 'feature_work', 'meta_value' => 1 ) ); ?>
		<?php while ( $work->have_posts() ) : $work->the_post(); ?>
			<?php $portfolio_image = get_field( 'portfolio_image' ); ?>
			<div class="feature-work-item">
				<a href="<?php the_permalink(); ?>">
					<?php the_post_thumbnail( 'full' ) ?>
					<div class="info">
						<div class="table"><div class="cell middle">
							<h2><?php the_title( ); ?></h2>
							<?php $terms = wp_get_post_terms( get_the_id(), 'project-attribute' ); ?>
							<h3><?php echo $terms[0]->name; ?></h3>
						</div></div>
					</div>
				</a>
			</div>
			<?php //if($i % 2 == 0) {echo '</div><div class="members row">';} $i++; ?>
		<?php endwhile; wp_reset_query(); ?>
		</div>
	</section>

	<section id="moreshit">
		<div class="container">
			<div class="row">
				<h2><a href="<?php echo home_url( 'recent-work' ) ?>" title="VIEW OUR PORTFOLIO PAGE">VIEW OUR PORTFOLIO PAGE</a></h2>
			</div>
		</div>
	</section>

	<div id="brands" class="section light">
		<div class="container">
			<header>
				<h2>Selected Clients</h2>
			</header><!-- /header -->
			<?php $brands = get_field('brands', 'options'); if( $brands ): $i = 1; ?>
			<div class="brandicons row">
			<?php foreach( $brands as $brand ): ?>
				<div class='brandicon'>
					<img src="<?php echo $brand['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				</div>
				<?php if($i % 5 == 0) {echo '</div><div class="brandicons row">';} ?>
			<?php $i++; endforeach; ?>
			</div>
			<?php endif; ?>
		</div>
	</div>

<?php
get_footer();
