<script>
	import Label from '$lib/components/Label/Label.svelte';

	let a = false;
</script>

<section>
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
		<label for="mint-tokens" class="switch">
			<input
				type="checkbox"
				name="mint-tokens"
				id="mint-tokens"
				placeholder="e.g. 1.000.000"
				bind:checked={a}
			/>
			<span class="slider" />
			<span class="label">Mint tokens</span>
		</label>
	</div>
</section>

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
