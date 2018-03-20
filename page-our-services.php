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

			<div class="service">
				<div class="wrapper">

					<div class="half image">
						<img data-src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID)); ?>" width="1920" height="1280" alt="">
					</div>
					
					<div class="half info">
						<div class="table">
							<div class="cell middle">
								<?php the_content( ); ?>
							</div>
						</div>
					</div>

				</div>
			</div>

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
