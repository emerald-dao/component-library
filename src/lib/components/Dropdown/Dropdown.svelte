<script type="ts">
	import { fly } from 'svelte/transition';

	export let width: string = 'fit-content';

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
			style={`width: ${width}`}
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
			top: 2.9rem;
			right: 0;
			width: fit-content;
			background-color: var(--clr-surface-primary);
			border-radius: var(--radius-2);
			padding: var(--space-5) var(--space-6);
			z-index: 999;
			border: 1px var(--clr-border-primary) solid;
		}
	}
</style>
