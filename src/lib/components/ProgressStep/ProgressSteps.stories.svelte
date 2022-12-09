<script>
	import ProgressSteps from './ProgressSteps.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="ProgressSteps" component={ProgressSteps} />

<Template let:args>
	<ProgressSteps {...args} />
</Template>

<Story
	name="done"
	args={{
		steps: [
			{
				name: 'Step 1',
				state: 'done'
			},
			{
				name: 'Step 2',
				state: 'done'
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
