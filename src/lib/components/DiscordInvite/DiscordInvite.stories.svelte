<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import DiscordInvite from './DiscordInvite.svelte';
</script>

<Meta title="Discord Invite" component={DiscordInvite} />

<Template let:args>
	<DiscordInvite {...args} />
</Template>

<Story
	name="No Background"
	args={{
		background: false
	}}
/>
<Story
	name="With Backround"
	args={{
		background: true
	}}
/>
