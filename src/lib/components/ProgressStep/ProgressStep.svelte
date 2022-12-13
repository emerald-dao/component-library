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
</script>

<div class={`main-wrapper direction-${direction}`} style={`flex-direction: ${direction}`}>
	{#if url}
		<a href={url}>
			<span class={`name name-${state} ${fontSize}`}>{stepName}</span>
		</a>
	{:else}
		<span class={`name name-${state} ${fontSize}`}>{stepName}</span>
	{/if}
	<div class="secondary-wrapper">
		<div class={`line line-${state}`} class:line-transparent={position === 'first'} />
		<div
			class={`circle circle-${state} center`}
			style={`min-width: ${diameter}rem; min-height: ${diameter}rem; max-width: ${diameter}rem; max-height: ${diameter}rem`}
		>
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
			transition: 0.3s;

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
				border: 1.5px var(--clr-surface-primary) solid;
				transition: 0.3s;

				&-success {
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
				background-color: var(--clr-surface-secondary);
				transition: 0.3s;

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

	.main-wrapper.direction-row,
	.main-wrapper.direction-row-reverse {
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
