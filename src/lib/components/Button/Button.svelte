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
	@use '../../styles/utils' as *;

	button,
	a {
		font-family: var(--ff-mono);
		--font-weight: 500;
		padding: 0.6em 2.4em;
		border-radius: 0.7em;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: left;
		gap: 0.7em;
		border: none;
		outline: none;
		transition: 0.4s box-shadow, 0.4s transform;
		width: 100%;
		text-decoration: none;

		@include mq(small) {
			width: fit-content;
		}
	}

	button:hover,
	a:hover {
		box-shadow: var(--clr-primary-main-t4) 4px 4px;
		transform: translateY(-3px);
		text-decoration: none;
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
		background-color: var(--clr-neutral-800);
		color: var(--clr-neutral-800);
		border-color: var(--clr-neutral-800);
	}

	// Types: 'generic' | 'ghost' | 'transparent'
	.generic {
		color: var(--clr-font-text-inverse);
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
		box-shadow: none;
		color: var(--clr-font-text-t3);
		transform: none;
	}

	// Sizes: 'x-small' | 'small' | 'medium' | 'large' | 'full-width'
	.x-small {
		font-size: var(--fs-100);
	}
	.small {
		font-size: var(--fs-200);
	}
	.medium {
		font-size: var(--fs-300);
	}
	.large {
		font-size: var(--fs-400);
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
		box-shadow: none;
		transform: none;
	}
</style>
