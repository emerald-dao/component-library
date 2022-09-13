
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import DiscordInvite from './DiscordInvite.svelte';
</script>

<Meta title="DiscordInvite" component={DiscordInvite}/>

<Template let:args>
  <DiscordInvite {...args}/>
</Template>

<Story name="Primary" args={{}}/>