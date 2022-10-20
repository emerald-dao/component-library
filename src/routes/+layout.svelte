<script type="ts">
	import { Header, Footer } from '$lib/index';
	import { theme } from '$lib/store/ThemeStore';
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

<Header themeStore={theme} {navElements} sticky={true} />
<main>
	<slot />
</main>
<Footer />
