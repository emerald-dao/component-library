<script type="ts">
	import '../app.postcss';
	import { Header, Footer } from '$lib/index';
	import { theme } from '$lib/store/ThemeStore';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '$lib/styles/app.scss';

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

<Header themeStore={theme} {navElements} />
<main>
	<slot />
</main>
<Footer />
