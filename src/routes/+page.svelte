<script>
	import DropZone from '$lib/components/DropZone/DropZone.svelte';
	import InputWrapper from '$lib/components/Forms/InputWrapper.svelte';
	import Label from '$lib/components/Label/Label.svelte';

	let logo;
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
		<InputWrapper name="fname" label="name" errors={[]} isValid={false} pending={true}>
			<input type="text" id="fname" name="fname" placeholder="hola" />
		</InputWrapper>

		<InputWrapper
			name="tokenName"
			label="Token Name"
			icon="tabler:currency-dollar"
			errors={[]}
			isValid={true}
		>
			<input
				name="tokenName"
				type="text"
				placeholder="DAOcoin"
				bind:value={logo}
				on:input={() => console.log('a')}
			/>
		</InputWrapper>

		<label for="logo">Logo</label>
		<DropZone
			name="logo"
			accept="image/png"
			maxAmountOfFiles={20}
			bind:bindValue={logo}
			multiple={true}
		/>
	</div>
</section>

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
