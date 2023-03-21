<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string;
	export let description: string;
	export let progress: string | undefined | false = undefined;
	export let progressMessage: string = 'Loading';
	export let icon: string | undefined = undefined;
	export let error: boolean = false;
</script>

<div class="column-2">
	<span class="transaction-status">
		{#if icon && error}
			<Icon {icon} color="red" />
		{:else}
			<Icon {icon} />
		{/if}
		{title}
	</span>
	<span class="transaction-detail">
		{description}
	</span>
	{#if progress}
		<progress min="0" max="100" value={progress}>{progressMessage}</progress>
	{/if}
</div>

<style type="scss">
	progress {
		accent-color: var(--clr-accent-main);
		height: 20px;
		margin-top: 2rem;
	}

	.transaction-detail {
		color: var(--clr-text-off);
		font-size: var(--font-size-1);
		line-height: 2.6ch;
		overflow-wrap: break-word;
	}

	.transaction-status {
		font-family: var(--font-mono);
		font-size: var(--font-size-2);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.7ch;
	}

	span {
		max-width: 20ch;
		text-align: center;
	}
</style>
