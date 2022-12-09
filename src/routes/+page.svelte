<script type="ts">
	import ProgressSteps from '$lib/components/ProgressStep/ProgressSteps.svelte';
	import Label from '$lib/components/Label/Label.svelte';

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
	<ProgressSteps steps={stepss} />
	<button
		on:click={() =>
			stepss[1].state === 'inactive'
				? (stepss[1].state = 'active')
				: (stepss[1].state = 'inactive')}>a</button
	>
	<div class="container-small">
		<h1 class="display-small">Emerald City DAO Components</h1>
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

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
