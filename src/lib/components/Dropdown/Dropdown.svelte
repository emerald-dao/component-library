<script type="ts">
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';

	export let width: string = 'fit-content';
	export let rightOffset = '0rem';
	export let topOffset = '3rem';
	export let closeOnNavigating = true;

	let dropDown: HTMLDivElement;
	let displayDropDown = false;

	const handleClick = () => {
		displayDropDown = !displayDropDown;
	};

	const handleWindowClick = (e: MouseEvent) => {
		if (dropDown && !dropDown.contains(e.target as Node)) {
			displayDropDown = false;
		}
	};

	$: if ($navigating && closeOnNavigating) displayDropDown = false;
</script>

<svelte:window on:click={handleWindowClick} />
<div class="main-wrapper">
	<div on:click|stopPropagation={handleClick} on:keydown class="parent">
		<slot name="parent" />
	</div>
	{#if displayDropDown}
		<div
			class="drop-down"
			bind:this={dropDown}
			transition:fly|local={{ y: 15, duration: 400 }}
			style={`width: ${width}; top: ${topOffset}; right: ${rightOffset};`}
		>
			<slot name="dropdown" />
		</div>
	{/if}
</div>

<style type="scss">
	.main-wrapper {
		position: relative;

		.parent {
			cursor: pointer;
		}

		.drop-down {
			position: absolute;
			width: fit-content;
			background-color: var(--clr-surface-primary);
			border-radius: var(--radius-2);
			z-index: 999;
			border: 1px var(--clr-border-primary) solid;
		}
	}
</style>
