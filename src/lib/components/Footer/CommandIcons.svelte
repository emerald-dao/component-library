<script type="ts">
	import Icon from '@iconify/svelte';
	import type { Writable } from 'svelte/store';
	import ThemeToggle from '../Header/ThemeToggle.svelte';

	export let themeStore: Writable<'dark' | 'light'> | undefined = undefined;
</script>

<div class="row-4 align-center justify-center">
	{#if themeStore}
		<ThemeToggle {themeStore} />
	{/if}
	<slot />
</div>
