<script lang="ts">
	export let imageSrc: string;
	export let text: string;
	export let hideTextOnMobile = false;
</script>

<div class="row-3 align-center">
	<img src={imageSrc} alt="Emerald DAO Logo" />
	<span class="w-medium" class:hide-on-mobile={hideTextOnMobile}>
		{text}
	</span>
</div>

<style lang="scss">
	img {
		width: 3rem;
		height: 3rem;
		object-fit: contain;
	}

	span {
		text-decoration: none !important;
		color: var(--clr-heading-main);
		font-family: var(--font-heading);
		font-size: var(--font-size-4);
	}
</style>
