<script type="ts">
	export let open = false;

	const handleClick = () => (open = !open);
</script>

<div on:click={handleClick} on:keydown>
	<div>
		<slot name="header" />
		{#if open}
			<slot name="open" />
		{/if}
	</div>
</div>
