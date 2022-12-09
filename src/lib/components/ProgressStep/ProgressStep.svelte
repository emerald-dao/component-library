<script type="ts">
	import type { ProgressStates } from './progress-states.type';
	import Icon from '@iconify/svelte';

	export let stepName: string;
	export let state: ProgressStates;
	export let position: 'first' | 'middle' | 'last' = 'middle';
</script>

<div class="main-wrapper">
	<span class={`name name-${state}`}>{stepName}</span>
	<div class="secondary-wrapper">
		<div class={`line line-${state}`} class:line-transparent={position === 'first'} />
		<div class={`circle circle-${state} center`}>
			{#if state === 'loading'}
				<Icon icon="tabler:loader" class="rotate" color="var(--clr-primary-main)" />
			{:else if state === 'error'}
				<Icon icon="tabler:x" color="var(--clr-alert-main)" />
			{/if}
		</div>
		<div
			class="line"
			class:line-done={state === 'done'}
			class:line-transparent={position === 'last'}
		/>
	</div>
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
		width: 100%;

		.name {
			color: var(--clr-heading-off);

			&-active {
				color: var(--clr-heading-main);
			}

			&-loading {
				color: var(--clr-heading-main);
			}

			&-error {
				color: var(--clr-heading-main);
			}
		}

		.secondary-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;

			.circle {
				width: 28px;
				height: 28px;
				aspect-ratio: 1/1;
				border-radius: 100%;
				background-color: var(--clr-surface-secondary);

				&-done {
					background-color: var(--clr-primary-main);
				}

				&-active {
					border: 1.5px var(--clr-primary-main) solid;
				}

				&-loading {
					border: 1.5px var(--clr-primary-main) solid;
				}

				&-error {
					border: 1.5px var(--clr-alert-main) solid;
				}
			}

			.line {
				height: 1.5px;
				width: 100%;
				background-color: var(--clr-surface-secondary);

				&-done,
				&-active,
				&-loading,
				&-error {
					background-color: var(--clr-primary-main);
				}

				&-transparent {
					background-color: transparent !important;
				}
			}
		}
	}
</style>
