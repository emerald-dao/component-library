<script type="ts">
	import Icon from '@iconify/svelte';

	export let routes: Route[];
	export let withHome: boolean = true;

	interface Route {
		path: string;
		label: string;
	}
</script>

<div class="breadcrumbs">
	{#if withHome}
		<a href="/" class="center">
			<Icon icon="tabler:home" />
		</a>
		<Icon icon="tabler:chevron-right" />
	{/if}
	{#each routes as { path, label }, i}
		{#if i < routes.length - 1}
			<a class="breadcrumb" href={path}>{label}</a>
			<Icon icon="tabler:chevron-right" />
		{:else}
			<span class="breadcrumb">{label}</span>
		{/if}
	{/each}
</div>

<style type="scss">
	.breadcrumbs {
		display: flex;
		flex-direction: row;
		align-items: center;

		.breadcrumb {
			font-family: var(--font-mono);
			text-decoration: none;
			font-size: var(--font-size-2);
		}

		a:not(:first-child),
		span:not(:first-child) {
			margin-left: var(--space-2);
		}

		a.breadcrumb,
		a {
			color: var(--clr-tertiary-main);
			margin-right: var(--space-2);
		}

		span.breadcrumb {
			color: var(--clr-heading-main);
		}
	}
</style>
