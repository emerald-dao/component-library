import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `@import './node_modules/@emerald-dao/design-system/styles/utils/mixins';`
			}
		}),
		sveltePreprocess()
	]
};

export default config;
