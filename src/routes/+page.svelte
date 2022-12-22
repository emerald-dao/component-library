<script type="ts">
	import HelperMessage from './../lib/components/Forms/HelperMessage.svelte';
	import Label from '$lib/components/Label/Label.svelte';
	import Icon from '@iconify/svelte';
	import Currency from '$lib/components/Currency/Currency.svelte';
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';
	import StatsSection from '$lib/components/Sections/StatsSection.svelte';

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
</script>

<section>
	<div class="container-small column-6 align-center">
		<span class="tagline">Welcome to Emerald City</span>
		<h1 class="display-small">Emerald City DAO Components</h1>
		<ProgressBar
			value={20}
			max={100}
			labelText="Amount Payed"
			helperText={`$600 FUSD raised of $3000 FUSD`}
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
	</div>
</section>
<StatsSection />

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
