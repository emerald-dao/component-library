<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Label from './Label.svelte';
</script>

<Meta title="Label" component={Label} />

<Template let:args>
	<Label {...args}>Emerald City</Label>
</Template>

<!-- Primary -->
<Story
	name="Primary"
	args={{
		color: 'primary',
		iconLeft: 'tabler:diamond',
		iconRight: 'tabler:diamond',
		state: 'on',
		size: 'small'
	}}
/>
