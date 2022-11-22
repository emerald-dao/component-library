<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Tagline from './Tagline.svelte';
</script>

<Meta title="Tagline" component={Tagline} />

<Template let:args>
	<Tagline {...args}>Tagline</Tagline>
</Template>

<Story name="Generic" />
