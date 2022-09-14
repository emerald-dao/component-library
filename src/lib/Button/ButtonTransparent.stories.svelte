<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { writable, get } from 'svelte/store';
</script>

<Meta title="Button Transparent" component={Button} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<!-- Active -->
<Story name="Primary Active" args={{ type: 'transparent' }} />
<Story name="Secondary Active" args={{ type: 'transparent', color: 'secondary' }} />
<Story name="Neutral Active" args={{ type: 'transparent', color: 'neutral' }} />
<!-- Disabled -->
<Story name="Primary Disabled" args={{ type: 'transparent', state: 'disabled' }} />
<Story
	name="Secondary Disabled"
	args={{ type: 'transparent', color: 'secondary', state: 'disabled' }}
/>
<Story
	name="Neutral Disabled"
	args={{ type: 'transparent', color: 'neutral', state: 'disabled' }}
/>
<!-- Loading -->
<Story name="Primary Loading" args={{ type: 'transparent', state: 'loading' }} />
<Story
	name="Secondary Loading"
	args={{ type: 'transparent', color: 'secondary', state: 'loading' }}
/>
<Story name="Neutral Loading" args={{ type: 'transparent', color: 'neutral', state: 'loading' }} />
<!-- Done -->
<Story name="Primary Done" args={{ type: 'transparent', state: 'done' }} />
<Story name="Secondary Done" args={{ type: 'transparent', color: 'secondary', state: 'loading' }} />
<Story name="Neutral Done" args={{ type: 'transparent', color: 'neutral', state: 'loading' }} />
