<script type="ts">
	import type { StatusStates } from '$lib/models/statusStates.type';

	export let status: 'alert' | 'success' | 'active';
	export let width: string = '1rem';
</script>

<div class={`${status}`} style={`width: ${width}; height: ${width}`} />

<style type="scss">
	div {
		border-radius: 50%;
	}

	.success {
		background-color: var(--clr-primary-main);
	}

	.inactive {
		background-color: var(--clr-neutral-400);
	}

	.active {
		background-color: var(--clr-tertiary-main);
	}

	.alert {
		background-color: var(--clr-alert-main);
	}
</style>
