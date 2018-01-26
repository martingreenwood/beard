<?php
/**
 * Template part for displaying page content in home
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package beard
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('container wide'); ?>>

	<div class="entry-content">
	<?php
		the_content();
	?>
	</div>

</article>
