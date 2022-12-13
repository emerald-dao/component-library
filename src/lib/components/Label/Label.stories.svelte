<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Label from './Label.svelte';
</script>

<Meta title="Label" component={Label} />

<Template let:args>
	<Label {...args}>Emerald City</Label>
</Template>

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
<Story
	name="Secondary"
	args={{
		color: 'secondary',
		iconLeft: 'tabler:diamond',
		iconRight: 'tabler:diamond',
		state: 'on',
		size: 'small'
	}}
/>
<Story
	name="Tertiary"
	args={{
		color: 'tertiary',
		iconLeft: 'tabler:diamond',
		iconRight: 'tabler:diamond',
		state: 'on',
		size: 'small'
	}}
/>
<Story
	name="Transparent"
	args={{
		color: 'transparent',
		iconLeft: 'tabler:diamond',
		iconRight: 'tabler:diamond',
		state: 'on',
		size: 'small'
	}}
/>
<Story
	name="Neutral"
	args={{
		color: 'neutral',
		iconLeft: 'tabler:diamond',
		iconRight: 'tabler:diamond',
		state: 'on',
		size: 'small'
	}}
/>
