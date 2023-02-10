<script type="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	onMount(() => {
		if (file?.type && file?.type.startsWith('image/')) {
			displayThumbnail(file);
		}
	});

	const displayThumbnail = (file: File) => {
		const reader = new FileReader();
		reader.readAsDataURL(file); // base 64 format

		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${reader.result}')`; /*asynchronous call. This function runs once reader is done reading file. reader.result is the base 64 format*/
			thumbnailElement.style.height = '100%';
			// thumbnailElement.style.width = '100%';
			thumbnailElement.style.aspectRatio = '1/1';
			thumbnailElement.style.backgroundSize = 'cover';
			thumbnailElement.style.backgroundRepeat = 'no-repeat';
			thumbnailElement.style.backgroundPosition = 'center';
			thumbnailElement.style.display = 'flex';
			thumbnailElement.style.borderRadius = '0.3rem';
			thumbnailElement.style.border = '1px solid var(--clr-border-primary)';
		};
	};

	let dispatch = createEventDispatcher();

	let thumbnailElement: HTMLDivElement;
	export let file: File;
</script>

<div class="drop-zone-file border-primary">
	<div class="file-data">
		{#if file.type && file.type.startsWith('image/')}
			<div bind:this={thumbnailElement} class="thumbnailElement" />
		{/if}
		<span class="text-small">{file.name}</span>
	</div>
	<div class="delete-icon-wrapper" on:click|stopPropagation={() => dispatch('deleteFile')}>
		<Icon icon="tabler:trash" color="var(--clr-text-main)" width="0.9rem" />
	</div>
</div>

<style type="scss">
	.drop-zone-file {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.8rem 1.4rem;
		height: 6rem;
		width: 100%;
		border-radius: var(--radius-1);
		background-color: var(--clr-surface-primary);
		font-size: var(--fs-200);
		position: relative;
		gap: 1rem;

		@include mq(small) {
			flex-direction: row;
		}

		.delete-icon-wrapper {
			position: absolute;
			top: 0.4rem;
			right: 0.4rem;
		}

		.file-data {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: var(--space-4);
			width: 100%;
			height: 100%;

			span {
				color: var(--clr-heading-primary);
				text-align: left;
				max-height: 1.4em;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 100%;
				height: 100%;
			}

			.thumbnailElement {
				display: none;
			}
		}
	}
</style>
