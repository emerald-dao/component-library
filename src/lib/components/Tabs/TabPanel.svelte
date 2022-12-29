<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { getContext } from 'svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext('TABS');

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<div in:fly|local={{ y: 10, duration: 400, easing: quintOut }}>
		<slot />
	</div>
{/if}
