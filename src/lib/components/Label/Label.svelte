<script type="ts">
	import Icon from '@iconify/svelte';

	export let color: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'transparent' | 'alert' =
		'primary';
	export let size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' = 'medium';
	export let state: 'on' | 'off' = 'on';
	export let iconLeft: string | undefined = undefined;
	export let iconRight: string | undefined = undefined;
	export let hasBorder = true;
</script>

<div class={`center ${color} ${size} ${state}`} class:no-border={!hasBorder}>
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
		height: fit-content;
		padding: 0.1em 0.8em;
		border-radius: var(--radius-1);
		gap: 0.4em;
	}

	.primary {
		background-color: var(--clr-primary-badge);
		color: var(--clr-primary-main);
		border: 0.5px var(--clr-primary-main) solid;
	}
	.primary.off {
		color: var(--clr-primary-off);
	}

	.secondary {
		background-color: var(--clr-secondary-badge);
		color: var(--clr-secondary-main);
		border: 0.5px var(--clr-secondary-main) solid;
	}
	.secondary.off {
		color: var(--clr-secondary-off);
	}

	.tertiary {
		background-color: var(--clr-tertiary-badge);
		color: var(--clr-tertiary-main);
		border: 0.5px var(--clr-tertiary-main) solid;
	}
	.tertiary.off {
		color: var(--clr-tertiary-off);
	}

	.neutral {
		background-color: var(--clr-neutral-badge);
		color: var(--clr-text-main);
		border: 0.5px var(--clr-border-primary) solid;
	}
	.neutral.off {
		color: var(--clr-heading-off);
	}

	.transparent {
		background-color: transparent;
		color: var(--clr-text-main);
		border: 0.5px var(--clr-border-primary) solid;
	}
	.transparent.off {
		color: var(--clr-heading-off);
	}

	.alert {
		background-color: var(--clr-alert-badge);
		color: var(--clr-alert-main);
		border: 0.5px var(--clr-alert-main) solid;
	}
	.alert.off {
		color: var(--clr-alert-off);
	}

	.xx-small {
		font-size: calc(var(--font-size-0) - 1px);
		padding: 0 0.7em;
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

	.no-border {
		border: none;
	}
</style>
