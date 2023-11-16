<script type="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Cookies from 'js-cookie';

	let theme: 'light' | 'dark';

	let toggleTheme: () => void;

	onMount(() => {
		let html = document.querySelector('html');

		toggleTheme = () => {
			let currentTheme = Cookies.get('theme');
			theme = currentTheme === 'light' ? 'dark' : 'light';

			if (html) {
				html.setAttribute('data-theme', theme);
				Cookies.set('theme', theme);
			}
		};
	});
</script>

{#if theme === 'light'}
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
		animation: show 0.5s forwards;
		animation-delay: 1.5s;
		z-index: 99;
	}
</style>
