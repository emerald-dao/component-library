<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import Button from '../Button/Button.svelte';

	const is404 = $page.status === 404;
</script>

<section class="section-large container-small center column-14">
	<div class="column-4 center">
		<h2 class="w-medium">{$page.status}</h2>
		<h1 class="w-medium">{is404 ? 'Page not found' : 'An error occurred'}</h1>
		<p class="large">
			{is404 ? 'Sorry, the page you requested could not be found.' : 'Sorry, something went wrong.'}
		</p>
	</div>
	<Button href="/" size="large" width="extended">
		<Icon icon="tabler:arrow-left" />
		Go home
	</Button>
	<div class="card-primary column-5 center">
		<p>
			<em>Join us on Discord to build together the future #onFlow</em>
		</p>
		<Button
			href="https://discord.gg/emerald-city-906264258189332541"
			type="ghost"
			width="extended"
			color="neutral"
		>
			<Icon icon="tabler:brand-discord" />
			Emerald City DAO
		</Button>
	</div>
</section>

<style lang="scss">
	section {
		max-width: 40ch;
		text-align: center;

		h2 {
			font-size: var(--font-size-5);
			color: var(--clr-text-off);
		}
	}
</style>
