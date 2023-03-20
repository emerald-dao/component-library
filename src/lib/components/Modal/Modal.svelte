<script context="module" lang="ts">
	let onTop: HTMLDivElement; //keeping track of which open modal is on top
	const modals: Modals = {}; //all modals get registered here for easy future access

	interface Modals {
		[key: string]: Modal;
	}

	interface Modal {
		close: () => void;
		open: () => void;
	}

	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id = '') {
		return modals[id];
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	let topDiv: HTMLDivElement;
	let visible = false;
	let prevOnTop: HTMLDivElement;
	let closeCallback: ((retVal?: string) => void) | undefined;

	export let id = '';
	export let background: string = 'var(--clr-surface-secondary)';

	function keyPress(ev: KeyboardEvent) {
		//only respond if the current modal is the top one
		if (ev.key == 'Escape' && onTop == topDiv) close(); //ESC
	}

	/**  API **/
	function open(callback?: () => void) {
		closeCallback = callback;
		if (visible) return;
		prevOnTop = onTop;
		onTop = topDiv;

		if (browser) {
			window.addEventListener('keydown', keyPress);
		}

		//this prevents scrolling of the main window on larger screens
		document.body.style.overflow = 'hidden';

		visible = true;

		//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
		document.body.appendChild(topDiv);
	}

	function close(retVal?: string) {
		if (!visible) return;
		if (browser) {
			window.removeEventListener('keydown', keyPress);
		}
		onTop = prevOnTop;
		if (onTop == null) document.body.style.overflow = '';
		visible = false;
		if (closeCallback) closeCallback(retVal);
	}

	//expose the API
	modals[id] = { open, close };

	onDestroy(() => {
		delete modals[id];
		if (browser) {
			window.removeEventListener('keydown', keyPress);
		}
	});
</script>

<div class="topModal" bind:this={topDiv} on:click={() => close()} on:keydown class:visible>
	{#if visible}
		<div
			class="modal"
			on:click|stopPropagation={() => {}}
			transition:fly={{ y: 30, duration: 500 }}
			on:keydown
			style={`background-color: ${background}`}
		>
			<div class="close-button header-link" on:click={() => close()} on:keydown>
				<Icon icon="tabler:x" width="1rem" />
			</div>
			<div class="modal-content">
				<slot />
			</div>
		</div>
	{/if}
</div>

<style type="scss">
	.topModal {
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.85);
		display: none;

		.modal {
			position: relative;
			border-radius: var(--radius-3);

			.close-button {
				position: absolute;
				top: var(--space-3);
				right: var(--space-3);
				cursor: pointer;
			}

			.modal-content {
				max-width: calc(100vw - 20px);
				max-height: calc(100vh - 20px);
				overflow: auto;
			}
		}
	}

	.topModal.visible {
		display: flex;
	}
</style>
