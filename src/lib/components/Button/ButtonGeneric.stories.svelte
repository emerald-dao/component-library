<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { writable, get } from 'svelte/store';
</script>

<Meta title="Button Generic" component={Button} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<!-- Active -->
<Story name="Primary Active" args={{}} />
<Story name="Secondary Active" args={{ color: 'secondary' }} />
<Story name="Neutral Active" args={{ color: 'neutral' }} />
<!-- Disabled -->
<Story name="Primary Disabled" args={{ state: 'disabled' }} />
<Story name="Secondary Disabled" args={{ color: 'secondary', state: 'disabled' }} />
<Story name="Neutral Disabled" args={{ color: 'neutral', state: 'disabled' }} />
<!-- Loading -->
<Story name="Primary Loading" args={{ state: 'loading' }} />
<Story name="Secondary Loading" args={{ color: 'secondary', state: 'loading' }} />
<Story name="Neutral Loading" args={{ color: 'neutral', state: 'loading' }} />
<!-- Done -->
<Story name="Primary Done" args={{ state: 'done' }} />
<Story name="Secondary Done" args={{ color: 'secondary', state: 'done' }} />
<Story name="Neutral Done" args={{ color: 'neutral', state: 'done' }} />
