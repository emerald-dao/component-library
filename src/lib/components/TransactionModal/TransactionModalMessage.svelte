<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let description: string;
	export let icon: string | undefined = undefined;
	export let error: boolean = false;
	export let transactionLink: string = '';
</script>

<div class="column-2" in:fade|local={{ duration: 400 }}>
	<span class="transaction-status">
		{#if icon && error}
			<Icon {icon} color="var(--clr-alert-main)" />
		{:else}
			<Icon {icon} />
		{/if}
		{title}
	</span>
	<span class="transaction-detail">
		{description}
	</span>
	{#if transactionLink}
		<a href={transactionLink} target="_blank" rel="noreferrer">View your transaction</a>
	{/if}
</div>

<style type="scss">
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
