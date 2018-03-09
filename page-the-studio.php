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

	<?php get_template_part( 'template-parts/content', 'repeat' ); ?>

	<div id="team">
		<div class="wrapper">
		<?php $i = 1; $team = new WP_Query( array( 'post_type' => 'team', 'posts_per_page' => -1 ) ); ?>
			<div class="members row">
			<?php while ( $team->have_posts() ) : $team->the_post(); ?>
				<div class="member">

					<?php $teamimage = wp_get_attachment_url( get_post_thumbnail_id($team->ID)); ?>
					<div class="image"">
						<?php the_post_thumbnail( 'snap' ); ?>
						<!-- <img src="https://placeimg.com/900/900/people" alt=""> -->
					</div>

					<div class="info">
						<div class="table"><div class="cell middle">
							<h2><?php the_title( ); ?></h2>
							<h3><?php the_field( 'sub_heading' ); ?></h3>
							<ul>
								<?php if (get_field( 'instagram' )): ?>
									<li><a href="<?php the_field( 'instagram' ); ?>" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
								<?php endif; ?>
								<?php if (get_field( 'facebook' )): ?>
									<li><a href="<?php the_field( 'facebook' ); ?>" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
								<?php endif; ?>
								<?php if (get_field( 'twitter' )): ?>
									<li><a href="<?php the_field( 'twitter' ); ?>" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
								<?php endif; ?>
								<?php if (get_field( 'linkedin' )): ?>
									<li><a href="<?php the_field( 'linkedin' ); ?>" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
								<?php endif; ?>
								<?php if (get_field( 'google-plus' )): ?>
									<li><a href="<?php the_field( 'google-plus' ); ?>" target="_blank"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
								<?php endif; ?>
								<?php if (get_field( 'tumblr' )): ?>
									<li><a href="<?php the_field( 'tumblr' ); ?>" target="_blank"><i class="fab fa-tumblr" aria-hidden="true"></i></a></li>
								<?php endif; ?>
								<?php if (get_field( 'behance' )): ?>
									<li><a href="<?php the_field( 'behance' ); ?>" target="_blank"><i class="fab fa-behance" aria-hidden="true"></i></a></li>
								<?php endif; ?>
							</ul>

							<?php the_content(); ?>
						</div></div>
					</div>

				</div>
				<?php
     			// if($i % 1 == 0) {echo '</div><div class="members row">';} $i++;
     			?>
			<?php endwhile; wp_reset_query(); ?>
			</div>
		</div>
	</div>

	<div id="insta">
		<div class="wrapper">
			<header>
				<h3>Follow us on instagram</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
				<a href="http://www.instagram.com/wearebeard" target="_blank" title="">Follow</a>
			</header>
			<div class="row instagrams">
			<?php
			// Supply a user id and an access token
			$userid = "13911372";
			$accessToken = "13911372.f2fa7d2.780b469082634eb9a8e1f92dd189f970";
			$counter = 0;

			// Gets our data
			function fetchData($url){
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_TIMEOUT, 20);
				$result = curl_exec($ch);
				curl_close($ch); 
				return $result;
			}
			// Pulls and parses data.
			$result = fetchData("https://api.instagram.com/v1/users/{$userid}/media/recent/?access_token={$accessToken}");
			$result = json_decode($result);
			?>

			<?php foreach ($result->data as $ig_post): ?>
			<div class="ig-item">
				<?php if ($ig_post->videos->standard_resolution->url): ?>
					<?php echo do_shortcode( '[video width="640" height="640" mp4="'.$ig_post->videos->standard_resolution->url.'" loop="true" autoplay="true"][/video]' ); ?>
				<?php else: ?>
					<img src="<?php echo $ig_post->images->standard_resolution->url; ?>" alt="">
				<?php endif; ?>
				<?php if(isset($ig_post->caption->text)): ?>
				<div class="caption">
					<div class="table">
						<div class="cell middle">
							<p><em style="font-size: 0.875em;"><?php echo date("d m Y", $ig_post->caption->created_time); ?></em><br><?php echo $ig_post->caption->text; ?></p>
						</div>
					</div>
				</div>
				<?php endif; ?>
			</div>
			<?php if ($counter++ == 7) break; ?>
			<?php endforeach ?> 

			</div>
		</div>	
	</div>

<?php
get_footer();
