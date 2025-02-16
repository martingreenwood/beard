<?php
/**
 * The template for displaying the footer
 * 
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package beard
 */

?>

	</div>

	<footer id="colophon" class="site-footer section light">
		<div class="site-info">
			<?php the_field( 'footer_content', 'options' );	?>
		</div>
		<nav id="footer-navigation" class="footer-navigation" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'menu-2', 'menu_id' => 'footer-menu' ) ); ?>
		</nav>
	</footer>
</div>

<?php wp_footer(); ?>
<script>
	new LazyLoad();
</script>
</body>
</html>
