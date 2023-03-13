<script type="ts">
	export let amount: number;
	export let currency: 'FLOW' | 'FUSD' | 'USD' | string;
	export let fontSize: string = '1rem';
	export let color: 'heading' | 'text' = 'text';
	export let moneyPrefix = false;
</script>

<div style={`font-size: ${fontSize}; color: var(--clr-${color}-main)`}>
	{#if amount >= 0}
		<span class="amount">{`${moneyPrefix ? '$' : ''}${amount.toLocaleString()}`}</span>
	{:else}
		<span class="amount">{`-$${Math.abs(amount).toLocaleString()}`}</span>
	{/if}
	<span class="currency">{currency}</span>
</div>

<style type="scss">
	.currency {
		font-size: 0.6em;
	}
</style>
