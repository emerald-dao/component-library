<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ProgressStep from './ProgressStep.svelte';
</script>

<Meta title="ProgressStep" component={ProgressStep} />

<Template let:args>
	<ProgressStep {...args} />
</Template>

<Story
	name="success"
	args={{
		stepName: 'Step 1',
		state: 'success'
	}}
/>
<Story
	name="inactive"
	args={{
		stepName: 'Step 1',
		state: 'inactive'
	}}
/>
<Story
	name="active"
	args={{
		stepName: 'Step 1',
		state: 'active'
	}}
/>
<Story
	name="loading"
	args={{
		stepName: 'Step 1',
		state: 'loading'
	}}
/>
<Story
	name="error"
	args={{
		stepName: 'Step 1',
		state: 'error'
	}}
/>
