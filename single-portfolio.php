<?php
/**
 * The template for displaying all single portfoli items
 *
 * @package beard
 */

get_header(); ?>

	<div id="primary" class="content-area pfolio">
		<main id="main" class="site-main container wide" role="main">
			<?php
			while ( have_posts() ) : the_post();
				get_template_part( 'template-parts/content', 'portfolio' );
			endwhile;
			?>
		</main>
	</div>

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
										<img src="<?php echo $file['url'] ?>" alt="">
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
					<?php echo wp_get_attachment_image( $image['ID'], $size ); ?>
						</div>
					</div>
					<?php endforeach; ?>
				</ul>
			</div>
			<?php endif;

		endif;
		?>

	</section>

	<div class="page_links">
		<span class="prev">
			<?php previous_post_link( "%link" ); ?>
		</span>
		<span class="next">
			<?php next_post_link( "%link" ); ?>
		</span>
	</div>

<?php
get_footer();
