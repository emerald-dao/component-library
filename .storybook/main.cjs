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
	framework: '@storybook/sveltekit',
	base: './',
	features: {
		storyStoreV7: false
	},
	staticDirs: ['../static'],
	docs: {
		docsPage: 'automatic'
	}
};
