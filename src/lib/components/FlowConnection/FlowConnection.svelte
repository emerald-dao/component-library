<script type="ts">
	import Icon from '@iconify/svelte';

	export let network: 'mainnet' | 'testnet' | 'emulator' | undefined;
	export let transactionInProgress: boolean;
</script>

<div class="main-wrapper column-1">
	<p class="small">
		<span class="off xsmall"> Flow Blockchain connection: </span>
		{#if transactionInProgress}
			<span class="clr-tertiary row-1 align-center">
				<Icon icon="svg-spinners:3-dots-rotate" />
				{`Submitting transaction to ${network}`}
			</span>
		{:else}
			<span class="clr-primary row-1 align-center">
				<Icon icon="svg-spinners:3-dots-move" />
				{`Connected to ${network}`}
			</span>
		{/if}
	</p>
</div>

<style type="scss">
	.main-wrapper {
		.clr-primary {
			color: var(--clr-primary-main);
		}

		.clr-tertiary {
			color: var(--clr-tertiary-main);
		}
	}
</style>
