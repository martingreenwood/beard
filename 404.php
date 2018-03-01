<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package beard
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div class="table">
				<div class="cell middle">
					
					<section class="error-404 not-found">
						<header class="page-header">
							<a class="procrastinate" href="#game">Wanna procrastinate?</a>
						</header>
					</section>

					<div id="game">
						<div class="table">
							<div class="cell middle">
								<div class="container">
									<div class="heading">
										<h1 class="title">2048</h1>
										<div class="score-container">0</div>
									</div>
									<p class="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>

									<div class="game-container">
										<div class="game-message">
											<p></p>
											<div class="lower">
												<a class="retry-button">Try again</a>
											</div>
										</div>

										<div class="grid-container">
											<div class="grid-row">
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
											</div>
											<div class="grid-row">
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
											</div>
											<div class="grid-row">
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
											</div>
											<div class="grid-row">
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
												<div class="grid-cell"></div>
											</div>
										</div>
										<div class="tile-container"></div>
									</div>

									<p class="game-explanation"><strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong></p>
									<hr>
									<p>Created by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a> Based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a> and conceptually similar to <a href="http://asherv.com/threes/" target="_blank">Threes by Asher Vollmer.</a></p>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>

		</main>
	</div>

<?php
get_footer();
