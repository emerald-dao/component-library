<script>
	import ProgressSteps from './ProgressSteps.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="ProgressSteps" component={ProgressSteps} />

<Template let:args>
	<ProgressSteps {...args} />
</Template>

<Story
	name="row"
	args={{
		steps: [
			{
				name: 'Step 1',
				state: 'success'
			},
			{
				name: 'Step 2',
				state: 'success'
			},
			{
				name: 'Step 3',
				state: 'active'
			},
			{
				name: 'Step 4',
				state: 'inactive'
			}
		]
	}}
/>
<Story
	name="row-reverse"
	args={{
		direction: 'row-reverse',
		steps: [
			{
				name: 'Step 1',
				state: 'success'
			},
			{
				name: 'Step 2',
				state: 'success'
			},
			{
				name: 'Step 3',
				state: 'active'
			},
			{
				name: 'Step 4',
				state: 'inactive'
			}
		]
	}}
/>

<Story
	name="column"
	args={{
		direction: 'column',
		steps: [
			{
				name: 'Step 1',
				state: 'success'
			},
			{
				name: 'Step 2',
				state: 'success'
			},
			{
				name: 'Step 3',
				state: 'active'
			},
			{
				name: 'Step 4',
				state: 'inactive'
			}
		]
	}}
/>
<Story
	name="column-reverse"
	args={{
		direction: 'column-reverse',
		steps: [
			{
				name: 'Step 1',
				state: 'success'
			},
			{
				name: 'Step 2',
				state: 'success'
			},
			{
				name: 'Step 3',
				state: 'active'
			},
			{
				name: 'Step 4',
				state: 'inactive'
			}
		]
	}}
/>
