<?php $counter = 0;  ?>
	<?php if( have_rows('repeater') ): ?>
	
	<div id="sections">
		<?php while( have_rows('repeater') ): the_row(); // rows ?>

		<?php if( have_rows('column') ): while( have_rows('column') ): the_row(); $counter ++; // columns ?>

			<?php if($counter == 1) { ?>
			<?php $image = get_sub_field('image'); ?>
			<div class="service odd">
				<?php if (get_sub_field( 'page_link' )): ?>
				<div class="ovewrlay">
					<a class="more" href="<?php the_sub_field( 'page_link' ); ?>">Read More</a>
				</div>
				<?php endif;?>
				<div class="wrapper">
					<div class="table">
						<div class="cell middle">

							<div class="half" style="background-image: url(<?php echo $image['url'] ?>)">
								<img src="<?php echo $image['url'] ?>" alt="">
							</div>
							
							<div class="half text">
								<?php the_sub_field('content'); ?>
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
			<?php $image = get_sub_field('image'); ?>
			<div class="service even">
				<?php if (get_sub_field( 'page_link' )): ?>
				<div class="ovewrlay">
					<a class="more" href="<?php the_sub_field( 'page_link' ); ?>">Read More</a>
				</div>
				<?php endif;?>
				<div class="wrapper">
					
					<div class="half text">
						<div class="table">
							<div class="cell middle">
								<?php the_sub_field('content'); ?>
							</div>
						</div>
					</div>

					<div class="half" style="background-image: url(<?php echo $image['url'] ?>)">
						<img src="<?php echo $image['url'] ?>" alt="">
					</div>

				</div>
			</div>
			<?php } //end the elseif $counter ?>
				
		<?php endwhile; endif; ?>
	<?php endwhile;  ?>
	</div>
	<?php endif; ?>