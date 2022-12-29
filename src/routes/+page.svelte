<script type="ts">
	import InputWrapper from '$lib/components/Forms/InputWrapper.svelte';
	import Range from './../lib/components/Range/Range.svelte';
	import Label from '$lib/components/Label/Label.svelte';
	import Currency from '$lib/components/Currency/Currency.svelte';
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import PoweredByEcdao from '$lib/components/PoweredByECDAO/PoweredByECDAO.svelte';
	import StatusCircle from '$lib/components/StatusCircle/StatusCircle.svelte';
	import { Tab, TabPanel, TabList, Tabs } from '$lib/index';

	let stepss = [
		{ name: 'a', state: 'inactive' },
		{
			name: 'a',
			state: 'inactive'
		},
		{
			name: 'a',
			state: 'inactive'
		}
	];

	let value = 5;
</script>

<section>
	<div class="container-small column-6 align-center">
		<label for="a">
			<input type="checkbox" id="a" />
			Hola
		</label>

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

		<Currency amount={600000} currency="USD" color="heading" fontSize="1.4rem" />
		<Range bind:value id="basic-slider" min={0} max={10} suffix="%" />
		<span class="tagline">Welcome to Emerald City</span>
		<h1 class="display-small">Emerald City DAO Components</h1>
		<ProgressBar
			value={20}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="x-small"
		/>
		<ProgressBar
			value={20}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="small"
		/>
		<ProgressBar
			value={20}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
			size="medium"
		/>
		<ProgressBar
			value={20}
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
				<h2>First panel</h2>
			</TabPanel>

			<TabPanel>
				<h2>Second panel</h2>
			</TabPanel>

			<TabPanel>
				<h2>Third panel</h2>
			</TabPanel>
		</Tabs>
	</div>
</section>
<PoweredByEcdao />

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
