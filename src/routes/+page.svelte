<script type="ts">
	import InputWrapper from './../lib/components/Forms/InputWrapper.svelte';
	import PoweredByEcdao from '$lib/components/PoweredByECDAO/PoweredByECDAO.svelte';
	import FlowConnection from '$lib/components/FlowConnection/FlowConnection.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import ProgressSteps from '$lib/components/ProgressStep/ProgressSteps.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import TransactionModal from '$lib/components/TransactionModal/TransactionModal.svelte';
	import Currency from '$lib/components/Currency/Currency.svelte';

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
		<!-- <DropZone name="logo" accept="image/png" maxAmountOfFiles={1} bind:bindValue={file} /> -->

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

		<!-- <Label color="alert" size="xx-small">Holacomova</Label>

		<label for="burn-tokens" class="switch">
			<input type="checkbox" name="burn-tokens" id="burn-tokens" placeholder="e.g. 1.000.000" />
			<span class="slider" />
			Burn tokens
		</label>

		<div class="radio-tabs">
			<label>
				<input type="radio" id="html" name="fav_language" value="HTML" />
				HTML
			</label>

			<label>
				<input type="radio" id="js" name="fav_language" value="JS" />
				JS
			</label>
		</div>

		<div class="column-4 align-start">
			<label>
				<input type="radio" id="html" name="fav_language" value="HTML" />
				HTML
			</label>
			<label>
				<input type="radio" id="css" name="fav_language" value="CSS" />
				CSS
			</label>
			<label>
				<input type="radio" id="js" name="fav_language" value="JS" />
				JS
			</label>
		</div>

		<div>
			<InputWrapper isValid={true} errors={[]} name="aaa" label="Holaa" disabled={true}>
				<input type="date" disabled />
			</InputWrapper>
		</div>

		<Currency amount={600000} currency="USD" color="heading" fontSize="1.4rem" />
		<Range bind:value id="basic-slider" min={0} max={10} suffix="%" />
		<span class="tagline">Welcome to Emerald City</span>
		<h1 class="display-small">Emerald City DAO Components</h1>
		<ProgressBar
			value={21}
			min={20}
			max={30}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="x-small"
			showPercentage={true}
		/>
		<ProgressBar
			value={20}
			min={0}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="small"
			showPercentage={true}
		/>
		<ProgressBar
			value={50}
			min={0}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="medium"
			showPercentage={true}
		/>
		<ProgressBar
			value={20}
			min={0}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="large"
		/>
		<div class="row-8">
			<div class="card column-3">
				<Label size="x-small" iconLeft="tabler:diamond">Flow Blockchain</Label>
				<h4 class="w-medium">Emerald City DAO</h4>
				<p class="small">
					Here you'll find a collection of the components used in Emerald City Dao projects.
				</p>
			</div>
			<div class="card column-3">
				<Label size="x-small" iconLeft="tabler:diamond">Flow Blockchain</Label>
				<h4 class="w-medium">Emerald City DAO</h4>
				<p class="small">
					Here you'll find a collection of the components used in Emerald City Dao projects.
				</p>
			</div>
		</div>

		<Tabs>
			<TabList>
				<Tab>One</Tab>
				<Tab>Two</Tab>
				<Tab>Three</Tab>
			</TabList>

			<TabPanel>
				<h4>First panel</h4>
			</TabPanel>

			<TabPanel>
				<h4>Second panel</h4>
			</TabPanel>

			<TabPanel>
				<h4>Third panel</h4>
			</TabPanel>
		</Tabs>
	</div> -->
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

<!-- <PoweredByEcdao /> -->
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
