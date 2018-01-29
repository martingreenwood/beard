<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package beard
 */

global $post;

$post_date = strtotime($post->post_date);

get_header(); ?>

	<section id="wrapper">

		<div class="container narrow">

			<div id="primary" class="content-area span9">
				<main id="main" class="site-main" role="main">

				<?php
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content', get_post_format() );

					the_post_navigation();

				endwhile; // End of the loop.
				?>

				</main>
			</div>
			<?php get_sidebar(); ?>
		
		</div>

	</section>

<?php
get_footer();
