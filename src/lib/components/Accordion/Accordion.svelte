<script type="ts">
	export let open = false;

	const handleClick = () => (open = !open);
</script>

<div on:click={handleClick} on:keydown>
	<div>
		<slot name="header" {open} />
		{#if open}
			<slot name="open" {open} />
		{/if}
	</div>
</div>
