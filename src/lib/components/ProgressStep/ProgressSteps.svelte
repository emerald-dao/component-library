<script type="ts">
	import type { ProgressStates } from './progress-states.type';
	import ProgressStep from './ProgressStep.svelte';

	export let steps: Step[];
	export let direction: 'column' | 'row' = 'row';

	interface Step {
		name: string;
		state: ProgressStates;
	}

	const getPosition = (i: number, array: any[]) => {
		if (i === 0) {
			return 'first';
		} else if (i === array.length - 1) {
			return 'last';
		} else return 'middle';
	};
</script>

<div class={`main-wrapper direction-${direction}`}>
	{#each steps as step, i}
		<ProgressStep
			stepName={step.name}
			state={step.state}
			position={getPosition(i, steps)}
			{direction}
		/>
	{/each}
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		align-items: center;
	}

	.main-wrapper.direction-column {
		flex-direction: column;
		height: 600px;
	}
	.main-wrapper.direction-row {
		flex-direction: row;
		width: 100%;
	}
</style>
