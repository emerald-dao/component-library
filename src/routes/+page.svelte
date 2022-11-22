<script>
	import Button from '$lib/components/Button/Button.svelte';
	import { Column } from '@mateoroldos/svelte.bones';
</script>

<section>
	<div class="container-small">
		<h1 class="display-small">Emerald City DAO Components</h1>
		<p class="large">
			Here you'll find a collection of the components used in Emerald City Dao projects.
		</p>
		<Column>
			<Button size="x-small">Learn More</Button>
			<Button size="small">Learn More</Button>
			<Button size="medium">Learn More</Button>
			<Button size="large">Learn More</Button>
		</Column>
	</div>
</section>

<style type="scss">
	h1 {
		--font-weight: var(--font-weight-semibold);
		text-align: center;
		margin-bottom: 2rem;
	}

	p {
		text-align: center;
		color: #888888;
		--font-width: 3500;
	}
</style>
