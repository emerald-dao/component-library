<script lang="ts">
	export let text: string | undefined = undefined;
	export let marginBlock: string = '0px';
</script>

{#if text}
	<div class="row-3 align-center" style={`margin-block: ${marginBlock}`}>
		<div class="divider" />
		<p class="small w-medium">{text}</p>
		<div class="divider" />
	</div>
{:else}
	<div class="divider" />
{/if}

<style lang="scss">
	p {
		color: var(--clr-text-off);
	}

	.divider {
		height: 1px;
		width: 100%;
		background-color: var(--clr-border-primary);
	}
</style>
