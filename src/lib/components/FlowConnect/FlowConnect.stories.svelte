<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import FlowConnect from './FlowConnect.svelte';

	let logIn = () => {
		alert('Login function triggered');
	};

	let unauthenticate = () => {
		alert('Unauthenticate function triggered');
	};
</script>

<Meta title="Flow Connect" component={FlowConnect} />

<Template let:args>
	<FlowConnect {...args} />
</Template>

<Story
	name="Log In"
	args={{
		logIn,
		unauthenticate
	}}
/>
<Story
	name="Authenticated"
	args={{
		logIn,
		unauthenticate,
		user: {
			loggedIn: true,
			addr: '0x767ec526ab554933'
		}
	}}
/>
