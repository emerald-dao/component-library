<script type="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import InputWrapper from '../Forms/InputWrapper.svelte';

	export let value: number | undefined;
	export let autofocus = false;
	export let isValid: boolean;
	export let label: string | undefined = undefined;
	export let currency: 'USDC' | 'FLOW' | string;
	export let name = 'amount';
	export let hasBorder = true;
	export let fontSize: string | undefined = undefined;
	export let fontColor: string | undefined = undefined;
	export let errors: string[] = [];
	export let tooltip: string | undefined = undefined;
	export let disabled = false;

	const dispatch = createEventDispatcher();

	let amountInput: HTMLInputElement;
	let amountValue: string;

	const handleChange = (input: Event) => {
		// Workaround to make input element be displayed with commas
		let numericStringAmount = amountValue.toString().replace(/[^0-9]/g, '');
		let numberAmount = Number(numericStringAmount);
		let formattedValue = Intl.NumberFormat('en-US').format(numberAmount);

		value = numberAmount;
		amountInput.value = formattedValue;

		dispatch('input', input);
	};

	onMount(() => {
		if (autofocus) {
			amountInput.focus();
		}

		if (value === undefined) {
			value = 0;
		} else {
			amountValue = value.toString();
		}
	});
</script>

<InputWrapper {name} {isValid} {errors} {label} {hasBorder} iconText={`$${currency}`} {tooltip}>
	<input
		type="text"
		{name}
		placeholder="0.00"
		bind:value={amountValue}
		bind:this={amountInput}
		on:input={handleChange}
		{disabled}
		style={`font-size: ${fontSize}; color: ${fontColor}`}
	/>
</InputWrapper>
