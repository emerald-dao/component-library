<script type="ts">
	import { Row } from '@mateoroldos/svelte.bones';
	import DropZoneFile from './DropZoneFile.svelte';
	import Icon from '@iconify/svelte';
	import { getFilesAsync } from '$lib/utilities/getFilesAsync';

	let dragOver = false; // Flag to check if we are dragging over the dropzone
	let inputRef: HTMLInputElement; // Reference to the hidden input element

	export let name: string;
	export let placeholder = 'Drop file here or click to upload';
	export let accept: string[] = []; // Type of file we accept, it should be an array of this format: ['image/png', 'image/jpeg']
	export let maxAmountOfFiles: number;
	export let isDirectory: boolean = false;
	export let multiple: boolean = false;
	export let bindValue: File[] | undefined;
	export let maxFileSizeInMB: number | undefined = undefined;

	const acceptString = accept.join(', ');

	export let validationFunction: (files: File[] | FileList) => Promise<true> = async (
		files: File[] | FileList
	): Promise<true> => {
		return new Promise((resolve, reject) => {
			if (files.length > maxAmountOfFiles) {
				reject(['Too many files']);
			} else {
				for (let i = 0; i < files.length; i++) {
					if (!accept.includes(files[i].type)) {
						reject(['Wrong file type']);
					}
					if (maxFileSizeInMB) {
						const fileSize = Number((files[i].size / (1024 * 1024)).toFixed(2));
						if (fileSize > maxFileSizeInMB) {
							reject([`The max file size is ${maxFileSizeInMB}mb, but your file is ${fileSize}mb. You can use ezgif.com/optimize to try and reduce your file size.`])
						}
					}
					continue;
				}
				resolve(true);
			}
		});
	};

	let errors: string[] = [];

	const saveFile = async (files: File[] | FileList | null) => {
		if (files) {
			if (validationFunction) {
				validationFunction(files)
					.then(() => {
						bindValue = [...files];
						errors = [];
					})
					.catch((err) => {
						errors = err;
					});
			} else {
				bindValue = [...files];
				errors = [];
			}
		}
	};

	const deleteAllFiles = () => {
		bindValue = [];
	};

	const deleteFile = (i: number) => {
		if (bindValue) {
			bindValue.splice(i, 1);
			bindValue = bindValue;
		}
	};

	const handleFileDrop = async (e: DragEvent) => {
		e.preventDefault();
		dragOver = false;
		if (e.dataTransfer?.items) {
			const getFiles = await getFilesAsync(e.dataTransfer?.items);
			saveFile(getFiles);
		}
	};

	const onInput = (e: Event) => {
		e.preventDefault();
		dragOver = false;
		saveFile((e.target as HTMLInputElement).files);
	};
</script>

<div
	class="drop-zone border-primary"
	class:drop-zone-over={dragOver}
	class:drop-zone-error={errors && errors.length > 0}
	on:dragover={() => (dragOver = true)}
	on:dragleave={() => (dragOver = false)}
	on:dragend={() => (dragOver = false)}
	on:drop={handleFileDrop}
	on:click={() => inputRef.click()}
	on:keydown
>
	{#if bindValue && bindValue.length > 2}
		<div class="empty-all-wrapper">
			<div on:click|stopPropagation={deleteAllFiles} class="empty-all-icon-wrapper" on:keydown>
				<Icon icon="tabler:trash" color="var(--clr-font-text-soft)" />
			</div>
		</div>
	{/if}

	{#if bindValue && bindValue.length > 0}
		{#each bindValue as file, index (file)}
			<DropZoneFile {file} on:deleteFile={() => deleteFile(index)} />
		{/each}
	{:else}
		<div class="column-3 align-center">
			<Icon icon="tabler:cloud-upload" color="var(--clr-text-off)" />
			<span class="prompt text-small">{placeholder}</span>
		</div>
	{/if}
	{#if errors.length > 0}
		{#each errors as error}
			<Row gap={0.4}>
				<Icon icon="tabler:x" color="var(--clr-alert-main)" width="0.75em" />
				<p class="error text-xsmall">{error}</p>
			</Row>
		{/each}
	{/if}

	<!-- Add a hidden input element to trigger when the user clicks the drop zone -->
	{#if isDirectory}
		<input
			{name}
			id={name}
			type="file"
			accept={acceptString}
			bind:this={inputRef}
			on:input={onInput}
			{multiple}
			webkitdirectory
		/>
	{:else}
		<input
			{name}
			id={name}
			type="file"
			accept={acceptString}
			bind:this={inputRef}
			on:input={onInput}
			{multiple}
		/>
	{/if}
</div>

<style type="scss">
	.drop-zone {
		height: auto;
		max-height: 16rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: flex-start;
		text-align: center;
		cursor: pointer;
		transition: 0.5s;
		overflow-y: auto;
		border-radius: var(--radius-1);

		.prompt {
			color: var(--clr-text-off);
		}

		.empty-all-wrapper {
			width: 100%;
			position: sticky;
			top: -1rem;
			margin-top: -3.8rem;
			margin-right: -2rem;
			z-index: 100;
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			.empty-all-icon-wrapper {
				background-color: var(--clr-surface-secondary);
				padding: 0.4rem;
				border-radius: 0.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px var(--clr-border-primary) solid;
			}
		}
	}

	.drop-zone-over {
		border-color: var(--clr-text-main);
	}
	.drop-zone-error {
		border-color: var(--clr-alert-main);
	}

	.error {
		color: var(--clr-alert-main);
	}

	input {
		display: none;
	}
</style>
