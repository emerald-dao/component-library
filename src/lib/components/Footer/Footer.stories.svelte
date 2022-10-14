<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Footer from './Footer.svelte';
</script>

<Meta title="Footer" component={Footer} />

<Template let:args>
	<Footer {...args} />
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
		emeraldTools: [
			{
				name: 'Emerald Academy',
				url: 'https://academy.ecdao.org/'
			},
			{
				name: 'Touchstone',
				url: 'https://touchstone.city/'
			},
			{
				name: 'FLOAT',
				url: 'https://floats.city/'
			},
			{
				name: 'Emerald Bot',
				url: 'https://bot.ecdao.org/'
			},
			{
				name: 'Geeft',
				url: 'https://geeft.ecdao.org/'
			},
			{
				name: 'Drizzle',
				url: 'https://www.drizzle33.app/'
			}
		],
		socials: [
			{
				name: 'Twitter',
				url: 'https://twitter.com/emerald_dao',
				icon: 'ion:logo-twitter'
			},
			{
				name: 'GitHub',
				url: 'https://github.com/emerald-dao',
				icon: 'ion:logo-github'
			}
		]
	}}
/>
