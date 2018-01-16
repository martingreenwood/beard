<?php
/**
 * Template part for displaying portfolio content
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package beard
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>
	<div class="entry-content span12">
		<h1><?php the_title( ) ?></h1>
		<?php
			the_content();
		?>
	</div>
</article>
