<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
	<slot />
</button>

<style type="scss">
	button {
		background: none;
		border: none;
		border-radius: 0;
		margin: 0;
		color: var(--clr-heading-off);
		cursor: pointer;
		transition: 0.2s;
		padding-bottom: var(--space-2);
		font-size: var(--font-size-1);
		border-bottom: 2px solid transparent;

		&:hover {
			color: var(--clr-heading-main);
		}
	}

	.selected {
		border-bottom: 2px solid var(--clr-heading-main);
		color: var(--clr-heading-main);
	}
</style>
