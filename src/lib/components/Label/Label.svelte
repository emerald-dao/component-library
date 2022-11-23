<script type="ts">
	import Icon from '@iconify/svelte';

	export let color: 'primary' | 'secondary' | 'neutral' | 'transparent' = 'primary';
	export let size: 'x-small' | 'small' | 'medium' | 'large' = 'medium';
	export let state: 'on' | 'off' = 'on';
	export let iconLeft: string | undefined = undefined;
	export let iconRight: string | undefined = undefined;
</script>

<div class={`center ${color} ${size} ${state}`}>
	{#if iconLeft}
		<Icon icon={iconLeft} />
	{/if}
	<slot />
	{#if iconRight}
		<Icon icon={iconRight} />
	{/if}
</div>

<style type="scss">
	div {
		width: fit-content;
		padding: 0.3em 1em;
		border-radius: var(--radius-1);
		gap: 0.4em;
	}

	.primary {
		background-color: var(--clr-primary-badge);
		color: var(--clr-primary-main);
	}
	.primary.off {
		color: var(--clr-primary-off);
	}

	.secondary {
		background-color: var(--clr-secondary-badge);
		color: var(--clr-secondary-main);
	}
	.secondary.off {
		color: var(--clr-secondary-off);
	}

	.neutral {
		background-color: var(--clr-neutral-badge);
		color: var(--clr-heading-main);
	}
	.neutral.off {
		color: var(--clr-heading-off);
	}

	.transparent {
		background-color: transparent;
		color: var(--clr-heading-main);
	}
	.transparent.off {
		color: var(--clr-heading-off);
	}

	.x-small {
		font-size: var(--font-size-0);
	}

	.small {
		font-size: var(--font-size-1);
	}

	.medium {
		font-size: var(--font-size-2);
	}

	.large {
		font-size: var(--font-size-3);
	}
</style>
