<script type="ts">
	export let value: number;
	export let max = 100;
	export let size = 'md';
	export let labelText = '';
	export let hideLabel = false;
	export let helperText = '';
	export let id = 'id-' + Math.random().toString(36);
	export let width: string = '100%';

	$: indeterminate = value === undefined;
	$: capped = value > max ? max : value < 0 ? 0 : value;
</script>

<div class={`size-${size} column-1`} style={`width: ${width}`}>
	<label for={id} class:hide-label={hideLabel}>
		{labelText}
	</label>
	<div class="progressbar" {id}>
		<div class="bar" style={`width: ${(capped / max) * 100}%`} class:full-bar={capped === max} />
	</div>
	{#if helperText}
		<span class="xsmall">
			{helperText}
		</span>
	{/if}
</div>

<style type="scss">
	.progressbar {
		background-color: var(--clr-surface-secondary);
		border-radius: var(--radius-0);
		height: var(--space-3);
		width: 100%;

		.bar {
			background-color: var(--clr-primary-main);
			height: 100%;
			border-radius: var(--radius-0) 0 0 var(--radius-0);
		}

		.full-bar {
			border-radius: var(--radius-0);
		}
	}
</style>