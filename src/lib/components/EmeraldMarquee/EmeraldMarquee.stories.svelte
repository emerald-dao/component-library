<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import EmeraldMarquee from './EmeraldMarquee.svelte';
</script>

<Meta title="Emerald Marquee" component={EmeraldMarquee} />

<Template let:args>
	<EmeraldMarquee {...args}>Emerald City DAO</EmeraldMarquee>
</Template>

<Story name="Primary" args={{}} />
