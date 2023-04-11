<section>
	<a class="card container-small" href="https://docs.ecdao.org/" target="_blank" rel="noreferrer">
		<div>
			<img src="/PoweredByLogo.svg" alt="Logo" />
		</div>
		<div class="emerald-container">
			<span class="tagline-small">Powered by</span>
			<h3 class="w-medium">Emerald City DAO</h3>
		</div>
	</a>
</section>

<style type="scss">
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-5);

		@include mq(small) {
			flex-direction: row;
			justify-content: center;
			border-radius: var(--radius-5);
			border: 1px solid var(--clr-border-primary);
			padding-block: var(--space-9);
			padding: var(--space-8);
		}

		span {
			margin-bottom: var(--space-1);
			@include mq(small) {
				margin-bottom: -0.4em;
			}
		}

		.tagline-small {
			color: var(--clr-primary-main);
			letter-spacing: 0.12em;
		}

		.emerald-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;

			@include mq(small) {
				text-align: left;
			}
		}
	}
</style>
