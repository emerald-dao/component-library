<script type="ts">
	import Icon from '@iconify/svelte';
	import type { Writable } from 'svelte/store';
	import ThemeToggle from '../Header/ThemeToggle.svelte';

	export let themeStore: Writable<'dark' | 'light'>;
</script>

<div class="row-4 align-center justify-center">
	<a class="center" href="https://discord.com/invite/emeraldcity" target="_blank" rel="noreferrer">
		<Icon icon="tabler:brand-discord" color="var(--clr-text-main)" />
	</a>
	<ThemeToggle {themeStore} />
	<slot />
</div>
