<script type="ts">
	import Icon from '@iconify/svelte';

	export let tooltip: string;
	export let width: number = 1;
	export let backgroundColor = 'var(--clr-surface-primary)';
	export let borderColor = 'var(--clr-border-primary)';
</script>

<div
	data-tooltip={tooltip}
	class="center"
	style={`background-color: ${backgroundColor}; border-color:${borderColor}`}
>
	<Icon icon="tabler:question-mark" width={`${width}rem`} />
</div>

<style type="scss">
	div {
		border-radius: 800px;
		aspect-ratio: 1/1;
		width: fit-content;
		padding: 0.1em;
		border-width: 1px;
		border-style: solid;
	}
</style>
