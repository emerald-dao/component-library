<script type="ts">
	import type { ProgressStates } from './progress-states.type';
	import Icon from '@iconify/svelte';

	export let stepName: string;
	export let state: ProgressStates;
	export let position: 'first' | 'middle' | 'last' = 'middle';
	export let direction: 'column' | 'row';
</script>

<div class={`main-wrapper direction-${direction}`}>
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
			class:line-success={state === 'success'}
			class:line-transparent={position === 'last'}
		/>
	</div>
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-3);

		.name {
			color: var(--clr-heading-off);
			transition: 0.6s;
			transition-delay: 0.4s;

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
			align-items: center;

			.circle {
				min-width: 28px;
				min-height: 28px;
				max-width: 28px;
				max-height: 28px;
				// aspect-ratio: 1/1;
				border-radius: 100%;
				background-color: var(--clr-surface-secondary);
				border: 1.5px var(--clr-surface-primary) solid;
				transition: 0.6s;
				transition-delay: 0.4s;

				&-success {
					background-color: var(--clr-primary-main);
					transition: 0.6s;
					transition-delay: 0.4s;
				}

				&-active {
					border: 1.5px var(--clr-primary-main) solid;
					transition: 0.6s;
					transition-delay: 0.4s;
				}

				&-loading {
					border: 1.5px var(--clr-primary-main) solid;
					transition: 0.6s;
					transition-delay: 0.4s;
				}

				&-error {
					border: 1.5px var(--clr-alert-main) solid;
					transition: 0.6s;
					transition-delay: 0.4s;
				}
			}

			.line {
				background-color: var(--clr-surface-secondary);
				transition: 0.6s;

				&-success,
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

	.main-wrapper.direction-row {
		flex-direction: column;
		width: 100%;

		.secondary-wrapper {
			flex-direction: row;
			width: 100%;
		}

		.line {
			height: 1.5px;
			width: 100%;
		}
	}

	.main-wrapper.direction-column {
		flex-direction: row;
		height: 100%;
		width: 100%;
		justify-content: flex-end;

		.secondary-wrapper {
			flex-direction: column;
			height: 100%;
		}
		.line {
			height: 100%;
			width: 1.5px;
		}
	}
</style>
