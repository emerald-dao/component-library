<script type="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	export let themeStore: Writable<'dark' | 'light'>;

	// let toggleTheme: () => void;

	// onMount(() => {
	// 	let html = document.querySelector('html');

	// 	if (html) {
	// 		html.setAttribute('data-theme', $themeStore);
	// 	}

	// 	toggleTheme = () => {
	// 		let newTheme: 'light' | 'dark' = $themeStore === 'light' ? 'dark' : 'light';
	// 		$themeStore = newTheme;

	// 		if (html) {
	// 			html.setAttribute('data-theme', $themeStore);
	// 		}
	// 	};
	// });
</script>

<form method="POST">
	{#if $themeStore === 'light'}
		<button
			formaction="/?/setTheme&theme=light"
			class="theme-toggle"
			in:fly={{ y: 10, duration: 500 }}
		>
			<Icon icon="tabler:sun" color="var(--clr-text-main)" />
		</button>
	{:else}
		<button
			class="theme-toggle"
			formaction="/?/setTheme&theme=dark"
			in:fly={{ y: 10, duration: 500 }}
		>
			<Icon icon="tabler:moon" color="var(--clr-text-main)" />
		</button>
	{/if}
</form>

<style>
	button,
	input[type='submit'],
	input[type='reset'] {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		animation: show 0.5s forwards;
		animation-delay: 1.5s;
		z-index: 99;
	}
</style>
