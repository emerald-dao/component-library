<script type="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	export let themeStore: Writable<'dark' | 'light'>;

	let toggleTheme: () => void;

	onMount(() => {
		let html = document.querySelector('html');
		html.setAttribute('data-theme', $themeStore);

		toggleTheme = () => {
			let newTheme: 'light' | 'dark' = $themeStore === 'light' ? 'dark' : 'light';
			$themeStore = newTheme;
			html.setAttribute('data-theme', $themeStore);
		};
	});
</script>

{#if $themeStore === 'light'}
	<a
		class="theme-toggle"
		href="/"
		on:click|preventDefault={toggleTheme}
		in:fly={{ y: 10, duration: 500 }}
	>
		<Icon icon="tabler:sun" color="var(--clr-text-main)" />
	</a>
{:else}
	<a
		class="theme-toggle"
		href="/"
		on:click|preventDefault={toggleTheme}
		in:fly={{ y: 10, duration: 500 }}
	>
		<Icon icon="tabler:moon" color="var(--clr-text-main)" />
	</a>
{/if}

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.8em;
		border-radius: 50%;
		animation: show 0.5s forwards;
		animation-delay: 1.5s;
		z-index: 99;
	}
</style>
