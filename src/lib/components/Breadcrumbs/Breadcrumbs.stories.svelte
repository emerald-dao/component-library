<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<Meta title="Breadcrumbs" component={Breadcrumbs} />

<Template let:args>
	<Breadcrumbs {...args} />
</Template>

<Story
	name="Breadcrumbs"
	args={{
		routes: [
			{ path: '/catalog', label: 'catalog' },
			{ path: '/catalog/courses', label: 'courses' },
			{ path: '/catalog/courses/begginer-dapp', label: 'begginer-dapp' }
		]
	}}
/>
