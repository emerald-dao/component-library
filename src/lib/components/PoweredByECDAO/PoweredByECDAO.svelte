<section>
	<a class="card container-small" href="https://docs.ecdao.org/" target="_blank" rel="noreferrer">
		<span class="tagline-small">Powered by</span>
		<div class="image-wrapper">
			<img src="/PoweredByLogo.svg" alt="Logo" />
		</div>
		<div class="emerald-wrapper">
			<h3 class="w-medium">Emerald City DAO</h3>
		</div>
	</a>
</section>

<style type="scss">
	.card {
		display: grid;
		grid-template-areas:
			'top'
			'middle'
			'bottom';
		padding: var(--space-5);
		justify-content: center;

		@include mq(small) {
			display: grid;
			grid-template-areas:
				'Top Top'
				'Left Right';
		}

		span {
			text-align: center;
			margin-bottom: var(--space-1);
			grid-area: middle;
			margin-top: 0px;

			@include mq(small) {
				height: min-content;
				grid-area: Top;
				margin-bottom: 0;
				margin-top: var(--space-4);
			}
		}
		.image-wrapper {
			display: flex;
			justify-content: center;
			grid-area: top;
			margin-bottom: var(--space-1);

			@include mq(small) {
				grid-area: Left;
			}
		}

		.tagline-small {
			color: var(--clr-primary-main);
			letter-spacing: 0.12em;
		}

		.emerald-wrapper {
			grid-area: bottom;
			text-align: center;

			@include mq(small) {
				grid-area: Right;
				text-align: left;
				margin-top: var(--space-6);
			}
		}
	}
</style>
