<script type="ts">
	import type { ProgressStates } from './progress-states.type';
	import Icon from '@iconify/svelte';

	export let stepName: string;
	export let state: ProgressStates;
	export let position: 'first' | 'middle' | 'last' = 'middle';
	export let direction: 'column' | 'row' | 'column-reverse' | 'row-reverse';
	export let diameter: number;
	export let url: string | null = null;
	export let fontSize: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
	export let gap: number;
	export let cutLineEnds: boolean;
</script>

<div class={`main-wrapper direction-${direction}`} style={`flex-direction: ${direction}`}>
	<div class="text-wrapper">
		{#if url}
			<a href={url}>
				<span class={`name name-${state} ${fontSize}`}>{stepName}</span>
			</a>
		{:else}
			<span class={`name name-${state} ${fontSize}`}>{stepName}</span>
		{/if}
	</div>
	<div class="secondary-wrapper">
		<div
			class={`line line-${state}`}
			class:line-transparent={position === 'first' && cutLineEnds}
			style={`min-height: ${direction.includes('column') ? `2px` : `${gap}rem`}; min-width:  ${
				direction.includes('row') ? `2px` : `${gap}rem`
			};`}
		/>
		<div
			class={`circle circle-${state} center`}
			style={`min-width: ${diameter}rem; min-height: ${diameter}rem; max-width: ${diameter}rem; max-height: ${diameter}rem`}
		>
			{#if state === 'loading'}
				<Icon icon="tabler:loader-2" class="rotate" color="var(--clr-heading-inverse)" />
			{:else if state === 'success'}
				<Icon icon="tabler:check" color="var(--clr-heading-inverse)" />
			{/if}
		</div>
		<div
			class="line"
			class:line-success={state === 'success'}
			class:line-transparent={position === 'last' && cutLineEnds}
			style={`min-height: ${direction.includes('column') ? `2px` : `${gap}rem`}; min-width:  ${
				direction.includes('row') ? `2px` : `${gap}rem`
			};`}
		/>
	</div>
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		gap: var(--space-3);

		.text-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;

			.name {
				color: var(--clr-text-off);
				transition: 0.3s;
				height: fit-content;

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

			a {
				text-decoration: none;
			}
		}

		.secondary-wrapper {
			display: flex;
			align-items: center;

			.circle-transition {
				transition: 0.3s;
				transition-delay: 0.3s;
			}

			.circle {
				border-radius: 100%;
				background-color: var(--clr-surface-secondary);
				transition: 0.3s;
				margin: 5px;
				padding: 0.2em;

				&-success {
					background-color: var(--clr-primary-main);
				}

				&-active {
					background-color: var(--clr-primary-main);
				}

				&-loading {
					background-color: var(--clr-tertiary-main);
				}

				&-error {
					background-color: var(--clr-alert-main);
				}
			}

			.line {
				background-color: var(--clr-surface-secondary);
				transition: 0.3s;
				display: flex;

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

	.main-wrapper.direction-column,
	.main-wrapper.direction-column-reverse {
		flex-direction: column;

		.secondary-wrapper {
			flex-direction: row;

			.line {
				width: 100%;
			}
		}
	}

	.main-wrapper.direction-row,
	.main-wrapper.direction-row-reverse {
		justify-content: flex-end;
		width: 100%;

		.secondary-wrapper {
			flex-direction: column;

			.line {
				height: 100%;
			}
		}
	}

	.main-wrapper.direction-row {
		span {
			text-align: right;
		}
	}
</style>
