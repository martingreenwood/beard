<?php
/**
 * The template for displaying all single portfoli items
 *
 * @package beard
 */

get_header(); ?>

	<?php 
	$featureimage = wp_get_attachment_url( get_post_thumbnail_id($post->ID));
	$terms = wp_get_post_terms( $post->ID, 'project-attribute' );
	//$luminance = get_avg_luminance($featureimage,10);
	//echo "AVG LUMINANCE: $luminance<br />";
	// assume a medium gray is the threshold, #acacac or RGB(172, 172, 172)
	// this equates to a luminance of 170
	// if ($luminance > 170) {
	// 	$lum_class = "black-text";
	// } else {
	// 	$lum_class = "white-text";
	// }
	$highlight_color = get_field( 'highlight_colour' );
	?>
	<!-- <section id="feature-image" class="parallax-window" data-bleed="50" data-parallax="scroll" data-image-src="<?php echo $featureimage; ?>">
		<div class="caption table">
			<div class="cell bottom">
				<div class="wrapper">
					<h1 <?php if($highlight_color): ?>style="color: <?php echo $highlight_color; ?>"<?php endif; ?>><?php the_title(); ?></h1>
					<hr <?php if($highlight_color): ?>style="background: <?php echo $highlight_color; ?>"<?php endif; ?>>
					<h2 <?php if($highlight_color): ?>style="color: <?php echo $highlight_color; ?>"<?php endif; ?>><?php echo $terms[0]->name; ?></h2>
				</div>
			</div>
		</div>
	</section> -->

	<div id="primary" class="content-area pfolio">
		<main id="main" class="site-main container" role="main">
		<section id="images" class="span8">
			<?php $portfolio_gallery = get_field('portfolio_gallery'); if( $portfolio_gallery ): ?>
			<?php foreach( $portfolio_gallery as $image ): ?>
			<div class="item">
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			</div>
			<?php endforeach; ?>
			<?php endif; ?>
		</section>
		<?php
		while ( have_posts() ) : the_post();
			get_template_part( 'template-parts/content', 'portfolio' );
		endwhile;
		?>
		</main>
		<div id="buffer"></div>
	</div>

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
