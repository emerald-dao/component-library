const sveltePreprocess = require('svelte-preprocess');
const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
		'../src/lib/**/*.stories.svelte'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-addon-theme-switcher'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	base: './',
	svelteOptions: {
		// preprocess: sveltePreprocess()
	},
	features: {
		storyStoreV7: false
	},
	staticDirs: ['../static'],
	async viteFinal(config, { configType }) {
		const { config: userConfig } = await loadConfigFromFile(
			path.resolve(__dirname, '../vite.config.js')
		);
		// Remove Svelte plugins that would duplicate those added by the Storybook plugin
		const plugins = userConfig.plugins
			.flat(1)
			.filter(
				(p) => !p.name.startsWith('vite-plugin-svelte') || p.name === 'vite-plugin-svelte-kit'
			);
		return mergeConfig(config, {
			...userConfig,
			plugins
		});
	}
};
