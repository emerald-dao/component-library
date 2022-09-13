<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Footer from './Footer.svelte';
</script>

<Meta title="Footer" component={Footer} />

<Template let:args>
	<Footer {...args} />
</Template>

<Story name="Generic" args={{}} />
