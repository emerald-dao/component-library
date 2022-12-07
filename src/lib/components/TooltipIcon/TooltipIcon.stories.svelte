<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import TooltipIcon from './TooltipIcon.svelte';
</script>

<Meta title="TooltipIcon" component={TooltipIcon} />

<Template let:args>
	<TooltipIcon {...args} />
</Template>

<Story
	name="TooltipIcon"
	args={{
		tooltip: 'Lorem ipsum is the best thing ever'
	}}
/>
