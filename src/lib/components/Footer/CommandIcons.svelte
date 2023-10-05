<script type="ts">
	import type { Writable } from 'svelte/store';
	import ThemeToggle from '../Header/ThemeToggle.svelte';

	export let themeStore: Writable<'dark' | 'light'> | null = null;
</script>

<div class="row-4 align-center justify-center">
	{#if themeStore}
		<ThemeToggle {themeStore} />
	{/if}
	<slot />
</div>
