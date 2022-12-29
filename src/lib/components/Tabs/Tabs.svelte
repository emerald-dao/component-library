<script type="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const tabs: HTMLElement[] = [];
	const panels: HTMLElement[] = [];
	const selectedTab: Writable<HTMLElement | null> = writable(null);
	const selectedPanel: Writable<HTMLElement | null> = writable(null);

	setContext('TABS', {
		registerTab: (tab: HTMLElement) => {
			tabs.push(tab);
			selectedTab.update((current) => current || tab);

			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);
				selectedTab.update((current) =>
					current === tab ? tabs[i] || tabs[tabs.length - 1] : current
				);
			});
		},

		registerPanel: (panel: HTMLElement) => {
			panels.push(panel);
			selectedPanel.update((current) => current || panel);

			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);
				selectedPanel.update((current) =>
					current === panel ? panels[i] || panels[panels.length - 1] : current
				);
			});
		},

		selectTab: (tab: HTMLElement) => {
			const i = tabs.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[i]);
		},

		selectedTab,
		selectedPanel
	});
</script>

<div class="tabs">
	<slot />
</div>

<style type="scss">
	.tabs {
		display: grid;
		grid-template-rows: 1fr auto;
		width: 100%;
	}
</style>
