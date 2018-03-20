<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package beard
 */

get_header(); ?>

	<div id="portfolio">
		<div class="row">
		<?php $i = 1; $work = new WP_Query( array( 'post_type' => 'portfolio', 'posts_per_page' => -1 ) ); ?>
			<div class="grid">
			<!-- <div class="grid-sizer"></div> -->
			<?php while ( $work->have_posts() ) : $work->the_post(); ?>
				<?php $portfolio_image = get_field( 'portfolio_image' ); ?>
				<?php $workimage = wp_get_attachment_url( get_post_thumbnail_id($work->ID)); ?>
				<div class="grid-item">
					<a href="<?php the_permalink(); ?>">
						<img data-src="<?php echo $workimage; ?>" width="1920" height="1280" alt="">

						<?php //the_post_thumbnail( 'feat' ) ?>
						<div class="info">
							<div class="table"><div class="cell middle">
								<h2><?php the_title( ); ?></h2>
								<?php $terms = wp_get_post_terms( get_the_id(), 'project-attribute' ); ?>
								<h3><?php echo $terms[0]->name; ?></h3>
							</div></div>
						</div>
						</a>
				</div>
			<?php endwhile; wp_reset_query(); ?>
			</div>
		</div>
	</div>

<?php
get_footer();
