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

	<div id="primary" class="content-area">
		<main id="main" class="site-main container narrow" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

			endwhile;
			?>

		</main>
	</div>

	<?php $counter = 0;  ?>
	<?php
	$args = array(
		'post_parent' => get_the_ID(),
		'post_type' => 'page',
		'orderby' => 'menu_order',
		'posts_per_page' => -1,
	);

	$child_query = new WP_Query( $args );
	?>
	<div id="sections">
		<?php while ( $child_query->have_posts() ) : $child_query->the_post(); $counter++; ?>

		<?php if($counter == 1) { ?>
			<div class="service odd">
				<div class="wrapper">
					<div class="table">
						<div class="cell middle">

							<div class="half" style="background-image: url(<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>)">
								<img data-src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>" alt="">
							</div>
							
							<div class="half text">
								<?php the_content( ); ?>
							</div>

						</div>
					</div>
				</div>
			</div>
			<?php }
			// If the second item in the loop
			elseif($counter == 2) { 
			// Reset the counter
			$counter = 0; 
			?>
			<div class="service even">
				<div class="wrapper">
					
					<div class="half text">
						<div class="table">
							<div class="cell middle">
								<?php the_content( ); ?>
							</div>
						</div>
					</div>

					<div class="half" style="background-image: url(<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>)">
						<img data-src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>" alt="">
					</div>

				</div>
			</div>
			<?php } //end the elseif $counter ?>

		<?php endwhile; ?>

		<?php wp_reset_postdata(); ?>

		<div class="fulllist">
			<div class="container narrow">
				<?php the_field( 'additional_content' ); ?>
			</div>
		</div>

	</div>

<?php
get_footer();
