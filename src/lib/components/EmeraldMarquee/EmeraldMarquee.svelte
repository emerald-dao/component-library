<script>
  export let duration = 10;
  export let repeat = 2;
</script>

<div class="wrapper">
  <div class="content">
    {#each Array(repeat) as _, i}
      <div class="animation center" style="animation-duration: {duration}s">
        <slot/>
      </div>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    overflow: hidden; 
    width: 100vw;
    border: 2px var(--clr-accent-main-t7) solid;
    border-width: 3px 0 3px 0;
    padding-block: 0.5rem;
    background-color: var(--clr-accent-main-t9);
  }
  .content {
    width: 10000px;
  }
  .animation {
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
    font-size: var(--fs-400);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @keyframes animation {
    100% {
      transform: translateX(-100%);
    }
  }
</style>