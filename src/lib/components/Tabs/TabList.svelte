<div class="tab-list">
	<slot />
</div>

<style>
	.tab-list {
		display: flex;
		flex-direction: row;
		gap: var(--space-8);
		border-bottom: 1px solid var(--clr-border-primary);
	}
</style>
