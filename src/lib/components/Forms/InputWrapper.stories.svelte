<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import InputWrapper from './InputWrapper.svelte';
</script>

<Meta title="Input" component={InputWrapper} />

<Template let:args>
	<InputWrapper {...args}>
		<input type="text" name="text-story" />
	</InputWrapper>
</Template>

<Story
	name="Valid text"
	args={{
		name: 'text-story',
		label: 'Text Input',
		errors: [],
		isValid: true
	}}
/>
<Story
	name="Invalid text"
	args={{
		name: 'text-story',
		label: 'Text Input',
		errors: ['Text should be nicer'],
		isValid: false
	}}
/>
<Story
	name="Loading text"
	args={{
		name: 'text-story',
		label: 'Text Input',
		pending: true,
		pendingMessage: ['Checking if name exists on the Flow Blockchain'],
		errors: [],
		isValid: false
	}}
/>
