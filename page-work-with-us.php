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

get_header('work-with-us'); ?>

	<div id="primary" class="content-area">
		<div class="wrapper">

			<div class="fs-form-wrap" id="fs-form-wrap">
				<div class="fs-title">

				</div>

				<?php
				while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'work-with-us' );

				endwhile;
				?>
			</div>

		</div>
	</div>

<?php
get_footer();
