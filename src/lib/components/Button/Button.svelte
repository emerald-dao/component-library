<script type="ts">
	import Icon from '@iconify/svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';

	export let href: string | undefined = undefined;
	export let state: 'active' | 'disabled' | 'loading' | 'done' = 'active';
	export let type: 'generic' | 'ghost' | 'transparent' = 'generic';
	export let color: 'primary' | 'secondary' | 'neutral' = 'primary';
	export let size: 'x-small' | 'small' | 'medium' | 'large' | 'full-width' = 'medium';
	export let download = false;
	export let form: string | undefined = undefined;
	export let target: '_blank' | '_self' | '_parent' | '_top' | undefined = undefined;
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
			class={`${state} ${color} ${type} ${size}`}
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
			class={`${state} ${color} ${type} ${size}`}
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
		class={`${state} ${color} ${type} ${size}`}
	>
		{#if state === 'loading'}
			<LoadingSpinner />
		{:else if state === 'done'}
			<Icon icon="ion:checkmark-circle" width="1.4em" />
		{/if}
		<slot>Normal Button</slot>
	</button>
{/if}

<style type="scss">
	button,
	a {
		font-family: var(--ff-mono);
		--font-weight: 400;
		padding: 0.4em 1.4em;
		border-radius: 10px;
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
		border-color: var(--clr-primary-main);
	}
	.secondary {
		background-color: var(--clr-secondary-main);
		color: var(--clr-secondary-main);
		border-color: var(--clr-secondary-main);
	}
	.neutral {
		background-color: var(--clr-shade-0);
		color: var(--clr-shade-0);
		border-color: var(--clr-shade-0);
	}

	// Types: 'generic' | 'ghost' | 'transparent'
	.generic {
		color: var(--clr-heading-inverse);
	}
	.ghost {
		background: transparent;
		border-width: 2px;
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
		min-width: 74px;
	}
	.small {
		font-size: var(--font-size-1);
		min-width: 78px;
	}
	.medium {
		font-size: var(--font-size-2);
		min-width: 82px;
	}
	.large {
		font-size: var(--font-size-3);
		min-width: 86px;
	}
	.full-width {
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
