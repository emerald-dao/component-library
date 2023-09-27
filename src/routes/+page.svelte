<script type="ts">
	import InputWrapper from './../lib/components/Forms/InputWrapper.svelte';
	import PoweredByEcdao from '$lib/components/PoweredByECDAO/PoweredByECDAO.svelte';
	import FlowConnection from '$lib/components/FlowConnection/FlowConnection.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Currency from '$lib/components/Currency/Currency.svelte';
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import UserProfileLabel from '$lib/components/UserProfileLabel/UserProfileLabel.svelte';

	let stepss = [
		{
			name: 'First step',
			state: 'success'
		},
		{
			name: 'Second step',
			state: 'loading'
		},
		{
			name: 'Third step',
			state: 'inactive'
		}
	];

	let value = 5;
	let file: File[];
</script>

<section>
	<ProgressBar
		{value}
		min={0}
		max={10}
		labelText="Amount Payed"
		helperText={`$600 FUSD raised of $3000 FUSD`}
		showPercentage={true}
		verticalLine={7}
	/>
	<UserProfileLabel address="0x01cf0e2f2f715450" />
	<div class="container-small column-6">
		<Currency
			amount={'786.02302032'}
			currency={'FLOW'}
			fontSize="var(--font-size-3)"
			decimalNumbers={2}
		/>
		<Button state="loading" statusIconsPosition="right">Loading</Button>
		<a href="dwd" class="card-primary">
			<h1>Card</h1>
		</a>

		<FlowConnection network="testnet" transactionInProgress={true} />

		<label for="logo">Logo</label>
		<InputWrapper
			name="hola"
			isValid={true}
			label="algo"
			prefix="https://"
			iconText="tabler:brand-discord"
			icon="tabler:brand-discord"
		>
			<input type="text" name="hola" required disabled />
		</InputWrapper>
	</div>
</section>
<section class="container">
	{#each stepss as step, i}
		<div class="accordion">
			<Accordion>
				<div slot="header" class="text">
					<div class="index-and-title-wrapper">
						<span class="small">{i + 1}</span>
						<span class="title-wrapper">{step.name}</span>
					</div>
				</div>
				<div slot="open" class="details column-2">
					<a href="/" target="_blank" rel="noreferrer" class="header-link"> {step.state} </a>
				</div>
			</Accordion>
		</div>
	{/each}
</section>
<section class="container-small">
	<CodeBlock
		codeBlockTitle="Cadence"
		codeStyle="js"
		code={`
		pub contract Counter {
   			pub var count: Int

   			pub fun increment() {
      			self.count = self.count + 1
   			}		

   			pub fun decrement() {
      			self.count = self.count - 2
   			}

   			pub fun get(): Int {
      			return self.count
   			}
		}`}
	/>
</section>
<PoweredByEcdao />

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}
	.accordion {
		display: flex;
		flex-direction: column;
		border-inline: var(--border-width-primary) var(--clr-border-primary) solid;
		border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;

		background: var(--clr-surface-primary);

		&:first-child {
			border-radius: var(--space-5) var(--space-5) 0 0;
			border-top: var(--border-width-primary) var(--clr-border-primary) solid;
		}

		&:last-child {
			border-radius: 0 0 var(--space-5) var(--space-5);
		}
		.text {
			padding: var(--space-7);
		}
	}
</style>
