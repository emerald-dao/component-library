<script type="ts">
	export let amount: number;
	export let currency: 'FLOW' | 'FUSD' | 'USD' | string | undefined = undefined;
	export let fontSize: string = '1rem';
	export let color: 'heading' | 'text' = 'text';
	export let moneyPrefix = false;
	export let decimalNumbers = 0;
</script>

<div style={`font-size: ${fontSize}; color: var(--clr-${color}-main)`}>
	{#if amount < 0}
		<span>-</span>
	{/if}
	{#if moneyPrefix}
		<span class="prefix">$</span>
	{/if}
	{#if amount >= 0}
		<span class="amount"
			>{`${amount.toLocaleString('en-US', {
				style: 'decimal',
				maximumFractionDigits: decimalNumbers,
				minimumFractionDigits: decimalNumbers
			})}`}</span
		>
	{:else}
		<span class="amount"
			>{`${Math.abs(amount).toLocaleString('en-US', {
				style: 'decimal',
				maximumFractionDigits: decimalNumbers,
				minimumFractionDigits: decimalNumbers
			})}`}</span
		>
	{/if}
	{#if currency}
		<span class="currency">{currency}</span>
	{/if}
</div>

<style type="scss">
	.prefix {
		--font-weight: var(--font-weight-thin);
	}

	.currency {
		font-size: 0.6em;
	}
</style>
