<script type="ts">
	import Icon from '@iconify/svelte';

	export let tooltip: string;
	export let width: number = 1;
</script>

<div data-tooltip={tooltip} class="center">
	<Icon icon="tabler:question-mark" width={`${width}rem`} />
</div>

<style type="scss">
	div {
		border-radius: 800px;
		aspect-ratio: 1/1;
		width: fit-content;
		padding: 0.1em;
		background-color: var(--clr-surface-primary);
		border: 1px var(--clr-border-primary) solid;
	}
</style>
