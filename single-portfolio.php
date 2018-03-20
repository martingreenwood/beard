<?php
/**
 * The template for displaying all single portfoli items
 *
 * @package beard
 */

get_header(); 
// $featureimage = wp_get_attachment_url( get_post_thumbnail_id($post->ID));
$featureimage = get_the_post_thumbnail_url($post->ID, 'feat'); 
?>

	<?php if( have_rows('top_slider') ): ?> 
	<div id="hero">
		<?php while ( have_rows('top_slider') ) : the_row(); ?>
		<?php
		$image = get_sub_field( 'image' );
		$animate = get_sub_field( 'animate' );
		$animate_effect = get_sub_field( 'animate_effect' );
		$animation_delay = get_sub_field( 'animation_delay' );
		?>
		<div style="background-image: url(<?php echo $image[url]; ?>)" class="element <?php if ( $animate ): ?>animated <?php echo $animate_effect; ?> d_<?php echo $animation_delay ?><?php endif; ?>">
		</div>
		<?php endwhile; ?>
		<div class="element">
			<div class="table">
				<div class="cell middle">
					<center>
						<h1 class="animated slideInUp"><?php the_title(); ?></h1>
					</center>
				</div>
			</div>
			<div class="arrow animated infinite bouce">
				<a href="#">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/down-arrow.svg" alt="" width="60">
				</a>
			</div>
		</div>
	</div>
	<?php else: ?>
	<div id="hero" style="background-image: url(<?php echo $featureimage; ?>)">
		<div class="table">
			<div class="cell middle">
				<center>
					<h1 class="animated slideInUp"><?php the_title(); ?></h1>
				</center>
			</div>
		</div>
		<div class="arrow">
			<a href="#">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/down-arrow.svg" alt="" width="60"></div>
			</a>
	</div>
	<?php endif; ?>

	<?php /* ?>
	<div id="primary" class="content-area pfolio">
		<main id="main" class="site-main container wide" role="main">
			<?php
			while ( have_posts() ) : the_post();
				get_template_part( 'template-parts/content', 'portfolio' );
			endwhile;
			?>
		</main>
	</div>
	<?php */ ?>

	<section id="images">

		<?php
		// rows
		if( have_rows('portfolio_builder') ):
			while ( have_rows('portfolio_builder') ) : the_row();
			?>
			<div class="row">
			<?php
				// items
				if( have_rows('element') ):
					while ( have_rows('element') ) : the_row();
						$element_width = get_sub_field( 'element_width' );
						$element_bg = get_sub_field( 'element_bg' );
						$element_content_color = get_sub_field( 'element_content_color' );
						?>
						<div 
							class="element <?php echo $element_width ?>" 
							style="color: <?php echo $element_content_color ?>; background: <?php echo $element_bg; ?>;">

							<?php
							if( have_rows('item') ):
								while ( have_rows('item') ) : the_row();

									if( get_row_layout() == 'image' ):

										$file = get_sub_field('image');

										?>
										<img data-src="<?php echo $file['url'] ?>" width="<?php echo $file['width'] ?>" height="<?php echo $file['height'] ?>" alt="">
										<?php

									elseif( get_row_layout() == 'text' ): 

										?>
										<div class="text">
											<div class="table">
												<div class="cell middle">
													<?php the_sub_field('text'); ?>	
												</div>
											</div>
										</div>
										<?php

									elseif( get_row_layout() == 'video' ): 

										?>
										<div class="avideo">
											<?php the_sub_field('video'); ?>	
										</div>
										<?php
									
									elseif( get_row_layout() == 'quote' ): 

										?>
									<div class="text">
											<div class="table">
												<div class="cell middle">
													<blockquote cite="http://example.com/facts">
														<div class="icon">
															<i class="fas fa-quote-left"></i>
														</div>
														<div class="blurb">
															<h3><?php the_sub_field('quote'); ?></h3>
															<p><?php the_sub_field('quotee'); ?></p>
														</div>
													</blockquote>
												</div>
											</div>	
										</div>
										<?php

									endif;

								endwhile;
							endif;
							?>

						</div>
						<?php
					// end while for items
					endwhile;
				endif;

			?>
			</div>
			<?php
			// end while for rows
			endwhile;

		else:

			$portfolio_gallery = get_field('portfolio_gallery');
			$size = 'full'; // (thumbnail, medium, large, full or custom size)

			if( $portfolio_gallery ): ?>
			<div class="container">
					<?php foreach( $portfolio_gallery as $image ): ?>
					<div class="row">
						<div class="columns twelve">
							<img data-src="<?php echo $image['url'] ?>" width="<?php echo $image['width'] ?>" height="<?php echo $image['height'] ?>" alt="">
						</div>
					</div>
					<?php endforeach; ?>
				</ul>
			</div>
			<?php endif;

		endif;
		?>

	</section>

	<section id="moreshit">
		<?php
		$prev_post = get_previous_post();
		if (!empty( $prev_post )): ?>
		<div class="postlink prev">
			<a href="<?php echo $prev_post->guid; ?>">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/left-arrow.svg" alt="">
				<span><?php echo $prev_post->post_title ?></span>
			</a>
		</div>
		<?php endif; ?>
		<div class="container">
			<div class="row">
				<h2><a class="goback" href="<?php echo home_url( 'recent-work' ) ?>" title="BACK TO PORTFOLIO">BACK TO PORTFOLIO</a></h2>
			</div>
		</div>
		<?php
		$next_post = get_next_post();
		if (!empty( $prev_post )): ?>
		<div class="postlink next">
			<a href="<?php echo $next_post->guid ?>">
				<span><?php echo $next_post->post_title ?></span>
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/right-arrow.svg" alt="">
			</a>
		</div>
		<?php endif; ?>
	</section>

<?php
get_footer();
