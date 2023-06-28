<script type="ts">
	export let value: number;
	export let max: number;
	export let min: number = 0;
	export let size: 'x-small' | 'small' | 'medium' | 'large' = 'medium';
	export let labelText = '';
	export let showPercentage = false;
	export let hideLabel = false;
	export let helperText = '';
	export let id = 'id-' + Math.random().toString(36);
	export let width: string = '100%';
	export let backgroundColor = 'var(--clr-surface-secondary)';
	export let foregroundColor = 'var(--clr-primary-main)';
	export let verticalLine: false | number = false;
	export let verticalLineHeight = '40px';

	$: verticalLinePosition = verticalLine ? `${(verticalLine * 100) / max}%` : null;

	$: indeterminate = value === undefined;
	$: capped = value > max ? max : value < 0 ? 0 : value;
</script>

<div class={`size-${size} column-1`} style={`width: ${width}`}>
	<label class="label-wrapper" for={id} class:hide-label={hideLabel}>
		{#if labelText.length > 0}
			<span>{labelText}</span>
		{:else}
			<div>
				<slot name="label" />
			</div>
		{/if}
		{#if showPercentage}
			<span class="percentage">{`${Math.round(((capped - min) / (max - min)) * 100)}%`}</span>
		{/if}
	</label>
	<div class="progressbar" {id} style={`background-color: ${backgroundColor}`}>
		{#if verticalLine !== false}
			<div
				class="vertical-line"
				style={`left: ${verticalLinePosition}; height: ${verticalLineHeight}`}
			/>
		{/if}
		<div
			class="bar"
			style={`width: ${
				((capped - min) / (max - min)) * 100
			}%; background-color: ${foregroundColor}`}
			class:full-bar={capped === max}
		/>
	</div>
	{#if helperText}
		<span>
			{helperText}
		</span>
	{/if}
</div>

<style type="scss">
	.label-wrapper {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;

		.percentage {
			color: var(--clr-primary-main);
		}
	}

	.progressbar {
		border-radius: var(--radius-0);
		width: 100%;
		position: relative;

		.vertical-line {
			position: absolute;
			width: 0px;
			border-left: 1px dashed var(--clr-text-main);
			top: 50%;
			transform: translateY(-50%);
		}

		.bar {
			height: 100%;
			border-radius: var(--radius-0) 0 0 var(--radius-0);
		}

		.full-bar {
			border-radius: var(--radius-0);
		}
	}

	.size {
		&-x-small {
			font-size: var(--font-size-0);
			.progressbar {
				height: var(--space-1);
			}
		}

		&-small {
			font-size: var(--font-size-1);
			.progressbar {
				height: var(--space-2);
			}
		}

		&-medium {
			font-size: var(--font-size-2);
			.progressbar {
				height: var(--space-3);
			}
		}

		&-large {
			font-size: var(--font-size-2);
			.progressbar {
				height: var(--space-4);
			}
		}
	}

	label {
		display: inline;
		font-size: 1em;
		line-height: normal;
	}

	span {
		font-size: 0.8em;
		line-height: normal;
	}
</style>
