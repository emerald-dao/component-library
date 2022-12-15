<script type="ts">
	export let amount: number;
	export let currency: 'FLOW' | 'FUSD' | 'USD';
	export let fontSize: string = '1rem';
</script>

<div style={`font-size: ${fontSize}`}>
	<span class="amount">{`$${amount.toLocaleString()}`}</span>
	<span class="currency">{currency}</span>
</div>

<style type="scss">
	.amount {
		font-size: 1em;
	}

	.currency {
		font-size: 0.6em;
	}
</style>
