<script type="ts">
	import '../app.postcss';
	import { Header, Footer } from '$lib/index';
	import { theme } from '$lib/store/ThemeStore';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '$lib/styles/app.scss';
	import Icon from '@iconify/svelte';

	let navElements = [
		{
			name: 'Page 1',
			url: '/page1',
			prefetch: true
		},
		{
			name: 'Page 2',
			url: '/page2',
			prefetch: true
		}
	];
</script>

<Header
	themeStore={theme}
	{navElements}
	logoText="Emerald City"
	userName="aaa"
	userAvatar="/ec-logo.png"
>
	<Icon icon="material-symbols:translate-rounded" slot="commands" />
</Header>
<main>
	<slot />
</main>
<Footer logoText="Emerald City" {navElements} />

<style>
	main {
		background-color: var(--clr-background-secondary);
		display: flex;
		flex-direction: column;
	}
</style>
