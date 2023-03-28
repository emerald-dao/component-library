<script type="ts">
	import Icon from '@iconify/svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';

	export let href: string | undefined = undefined;
	export let state: 'active' | 'disabled' | 'loading' | 'done' = 'active';
	export let type: 'generic' | 'ghost' | 'transparent' = 'generic';
	export let color: 'primary' | 'secondary' | 'neutral' = 'primary';
	export let size: 'x-small' | 'small' | 'medium' | 'large' | 'full-width' = 'medium';
	export let width: 'full-width' | 'regular' | 'extended' = 'regular';
	export let download = false;
	export let form: string | undefined = undefined;
	export let target: '_blank' | '_self' | '_parent' | '_top' | undefined = undefined;
	export let statusIconsPosition: 'left' | 'right' = 'right';
</script>

{#if href}
	{#if download}
		<a
			{href}
			on:click
			on:mouseover
			on:focus
			on:mouseenter
			on:mouseleave
			{download}
			class={`${state} ${color} ${type} ${size} width-${width}`}
		>
			<slot>Download</slot>
		</a>
	{:else}
		<a
			{href}
			on:click
			on:mouseover
			on:focus
			on:mouseenter
			on:mouseleave
			class={`${state} ${color} ${type} ${size}  width-${width}`}
			{target}
		>
			<slot>Link Button</slot>
		</a>
	{/if}
{:else}
	<button
		on:click
		on:mouseover
		on:focus
		on:mouseenter
		on:mouseleave
		{form}
		class={`${state} ${color} ${type} ${size}  width-${width}`}
	>
		{#if statusIconsPosition === 'left'}
			{#if state === 'loading'}
				<LoadingSpinner />
			{:else if state === 'done'}
				<Icon icon="ion:checkmark-circle" width="1.4em" />
			{/if}
		{/if}
		<slot>Normal Button</slot>
		{#if statusIconsPosition === 'right'}
			{#if state === 'loading'}
				<LoadingSpinner />
			{:else if state === 'done'}
				<Icon icon="ion:checkmark-circle" width="1.4em" />
			{/if}
		{/if}
	</button>
{/if}

<style type="scss">
	button,
	a {
		font-family: var(--ff-mono);
		--font-weight: 400;
		border-radius: var(--radius-1);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: left;
		gap: 0.7em;
		border: none;
		outline: none;
		transition: 0.4s transform;
		width: 100%;
		text-decoration: none;

		@include mq(small) {
			width: fit-content;
		}
	}

	button:hover,
	a:hover {
		transform: translateY(-2px);
	}

	// Colors: 'primary' | 'secondary' | 'neutral'
	.primary {
		background-color: var(--clr-primary-main);
		color: var(--clr-primary-main);
		border-color: var(--clr-primary-600);
	}
	.secondary {
		background-color: var(--clr-secondary-main);
		color: var(--clr-secondary-main);
		border-color: var(--clr-secondary-600);
	}
	.neutral {
		background-color: var(--clr-shade-0);
		color: var(--clr-shade-0);
		border-color: var(--clr-text-main);
	}

	// Types: 'generic' | 'ghost' | 'transparent'
	.generic {
		color: var(--clr-heading-inverse);
	}
	.ghost {
		background: transparent;
		border-width: 1px;
		border-style: solid;
	}
	.transparent {
		background: transparent;
		border: none;
		padding: 0;
		width: auto;
	}
	.transparent:hover {
		color: var(--clr-font-text-t3);
		transform: none;
	}

	// Sizes: 'x-small' | 'small' | 'medium' | 'large' | 'full-width'
	.x-small {
		font-size: var(--font-size-0);
		padding-block: 0;
	}
	.x-small.width-regular {
		padding-inline: var(--space-2);
	}
	.x-small.width-extended {
		padding-inline: var(--space-4);
	}
	.small {
		font-size: var(--font-size-1);
		padding-block: var(--space-1);
	}
	.small.width-regular {
		padding-inline: var(--space-3);
	}
	.small.width-extended {
		padding-inline: var(--space-6);
	}
	.medium {
		font-size: var(--font-size-2);
		padding-block: var(--space-1);
	}
	.medium.width-regular {
		padding-inline: var(--space-3);
	}
	.medium.width-extended {
		padding-inline: var(--space-7);
	}
	.large {
		font-size: var(--font-size-3);
		padding-block: var(--space-2);
	}
	.large.width-regular {
		padding-inline: var(--space-4);
	}
	.large.width-extended {
		padding-inline: var(--space-9);
	}

	// Width
	.full-width,
	.width-full-width {
		width: 100%;
	}

	// States: 'active' | 'disabled' | 'loading' | 'done'
	.active {
		cursor: pointer;
	}
	.disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}
	.loading {
		cursor: wait;
		opacity: 0.7;
	}
	.done {
		cursor: not-allowed;
		opacity: 0.5;
	}
	.done:hover,
	.loading:hover,
	.disabled:hover {
		transform: none;
	}
</style>
