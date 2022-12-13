<script type="ts">
	import type { ProgressStates } from './progress-states.type';
	import ProgressStep from './ProgressStep.svelte';

	export let steps: Step[];
	export let direction: Direction = 'row';
	export let diameter: number = 1.4;
	export let fontSize: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'medium';

	type Direction = 'column' | 'row' | 'column-reverse' | 'row-reverse';

	interface Step {
		name: string;
		state: ProgressStates;
		url?: string;
	}

	const swapColumnRow = (): Direction => {
		return direction
			.replace(/column/gi, 'temp')
			.replace(/row/gi, 'column')
			.replace(/temp/gi, 'row') as Direction;
	};

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
			url={step.url}
			direction={swapColumnRow()}
			{diameter}
			{fontSize}
		/>
	{/each}
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		align-items: center;
	}

	.main-wrapper.direction-column,
	.main-wrapper.direction-column-reverse {
		flex-direction: column;
		height: 600px;
	}
	.main-wrapper.direction-row,
	.main-wrapper.direction-reverse {
		flex-direction: row;
		width: 100%;
	}
</style>
