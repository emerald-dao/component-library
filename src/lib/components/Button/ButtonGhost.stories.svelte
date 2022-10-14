<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { writable, get } from 'svelte/store';
</script>

<Meta title="Button Ghost" component={Button} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<!-- Active -->
<Story name="Primary Active" args={{ type: 'ghost' }} />
<Story name="Secondary Active" args={{ type: 'ghost', color: 'secondary' }} />
<Story name="Neutral Active" args={{ type: 'ghost', color: 'neutral' }} />
<!-- Disabled -->
<Story name="Primary Disabled" args={{ type: 'ghost', state: 'disabled' }} />
<Story name="Secondary Disabled" args={{ type: 'ghost', color: 'secondary', state: 'disabled' }} />
<Story name="Neutral Disabled" args={{ type: 'ghost', color: 'neutral', state: 'disabled' }} />
<!-- Loading -->
<Story name="Primary Loading" args={{ type: 'ghost', state: 'loading' }} />
<Story name="Secondary Loading" args={{ type: 'ghost', color: 'secondary', state: 'loading' }} />
<Story name="Neutral Loading" args={{ type: 'ghost', color: 'neutral', state: 'loading' }} />
<!-- Done -->
<Story name="Primary Done" args={{ type: 'ghost', state: 'done' }} />
<Story name="Secondary Done" args={{ type: 'ghost', color: 'secondary', state: 'loading' }} />
<Story name="Neutral Done" args={{ type: 'ghost', color: 'neutral', state: 'loading' }} />
