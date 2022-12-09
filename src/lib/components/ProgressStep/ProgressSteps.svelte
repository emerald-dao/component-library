<script type="ts">
	import type { ProgressStates } from './progress-states.type';
	import ProgressStep from './ProgressStep.svelte';

	export let steps: Step[];

	interface Step {
		name: string;
		state: ProgressStates;
	}

	const getPosition = (i, array) => {
		if (i === 0) {
			return 'first';
		} else if (i === array.length - 1) {
			return 'last';
		} else return 'middle';
	};
</script>

<div class="main-wrapper">
	{#each steps as step, i}
		<ProgressStep stepName={step.name} state={step.state} position={getPosition(i, steps)} />
	{/each}
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
</style>
