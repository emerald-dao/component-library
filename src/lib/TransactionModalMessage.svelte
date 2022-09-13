<script lang="ts">
  import Icon from "@iconify/svelte";

  export let title: string;
  export let description: string;
  export let progress: string = "indeterminate";
  export let progressMessage: string = "Loading";
  export let icon: string;
  export let error: boolean = false;
</script>

<span class="transaction-status">
  {#if icon && error}
    <Icon icon={icon} color="red"/>
  {:else}
    <Icon icon={icon}/>
  {/if}
  {title}
</span>
<span class="transaction-detail">
  {description}
</span>  
{#if progress = "indeterminate"}
  <progress indeterminate>{progressMessage}</progress>
{:else if progress}
  <progress min="0" max="100" value={progress}>{progressMessage}</progress>
{/if}

<style type="scss">
  progress {
    accent-color: var(--clr-accent-main);
    height: 20px;
    margin-top: 2rem;
  }

  .transaction-detail {
    color: var(--clr-font-text-inverse-t6);
    font-size: var(--fs-200);
    line-height: 2.6ch;
    overflow-wrap: break-word;
  }

  .transaction-status {
    font-family: var(--font-mono);
    font-size: var(--fs-400);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.7ch;
  }

  span {
    max-width: 25ch;
    text-align: center;
  }
</style>
  