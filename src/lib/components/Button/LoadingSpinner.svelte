<script>
	import Icon from '@iconify/svelte';

	export let iconWidth = '1em';
	export let color = 'inherit';
</script>

<div class="rotating">
	<Icon icon="tabler:loader-2" width={iconWidth} {color} />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		justify-items: center;
	}

	@keyframes rotating {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	.rotating {
		animation: rotating 1.4s linear infinite;
	}
</style>
