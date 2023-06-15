<script type="ts">
	export let amount: number | string;
	export let currency: 'FLOW' | 'FUSD' | 'USD' | string | undefined = undefined;
	export let fontSize: string = '1rem';
	export let color: 'heading' | 'text' = 'text';
	export let moneyPrefix = false;
	export let decimalNumbers = 0;

	// if amount is of type string convert it to number
	if (typeof amount === 'string') {
		amount = Number(amount);
	}
</script>

<div style={`font-size: ${fontSize}; color: var(--clr-${color}-main)`}>
	<span class="main-wrapper" style={`font-size: 0.5em`}>
		{#if amount < 0}
			<span style={`font-size: ${fontSize}`}>-</span>
		{/if}
		{#if moneyPrefix}
			<span class="prefix" style={`font-size: ${fontSize}`}>$</span>
		{/if}
		{#if amount >= 0}
			<span class="amount" style={`font-size: ${fontSize}`}
				>{`${amount.toLocaleString('en-US', {
					style: 'decimal',
					maximumFractionDigits: decimalNumbers,
					minimumFractionDigits: decimalNumbers
				})}`}</span
			>
		{:else}
			<span class="amount" style={`font-size: ${fontSize}`}
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
	</span>
</div>

<style type="scss">
	.main-wrapper {
		.prefix {
			--font-weight: var(--font-weight-thin);
		}

		.currency {
			font-size: 1.4em;
			--font-weight: var(--font-weight-thin);
		}
	}
</style>
