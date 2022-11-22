<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';
	import { theme } from '$lib/store/ThemeStore';
</script>

<Meta title="Header" component={Header} />

<Template let:args>
	<Header {...args} />
</Template>

<Story
	name="Generic"
	args={{
		navElements: [
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
		],
		themeStore: theme
	}}
/>
