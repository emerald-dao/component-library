<script type="ts">
	import Icon from '@iconify/svelte';
	import HelperMessage from './HelperMessage.svelte';
	import { fly } from 'svelte/transition';
	import TooltipIcon from '../TooltipIcon/TooltipIcon.svelte';

	export let name: string;
	export let label: string | null = null;
	export let icon: string | null = null;
	export let iconUrl: string | null = null;
	export let iconText: string | null = null;
	export let pending: boolean = false;
	export let pendingMessage: string[] = [];
	export let errors: string[] | [] = [];
	export let isValid: boolean;
	export let tooltip: string | undefined = undefined;
	export let statusIcons = true;
	export let disabled = false;
	export let required = false;
	export let labelColor = 'var(--clr-text-main)';
</script>

{#if label}
	<label for={name} class="row-2" class:disabled style={`color: ${labelColor}`}>
		{label}
		{#if tooltip}
			<TooltipIcon {tooltip} width={0.75} />
		{/if}
		{#if required}
			<span class="required">*</span>
		{/if}
	</label>
{/if}
<div class="input-wrapper">
	<slot />
	{#if icon || iconUrl || iconText}
		<div class="icon-wrapper-left solid">
			{#if icon}
				<Icon {icon} />
			{:else if iconUrl}
				<img src={iconUrl} alt="Form helper icon" />
			{:else if iconText}
				<span class="icon-text">{iconText}</span>
			{/if}
		</div>
	{/if}
	{#if errors.length > 0 && statusIcons}
		<div class="icon-wrapper-right" transition:fly|local={{ x: 4, duration: 400 }}>
			<Icon icon="tabler:alert-circle" color="var(--clr-alert-main)" width="0.9em" />
		</div>
	{:else if isValid && statusIcons}
		<div class="icon-wrapper-right" transition:fly|local={{ x: 4, duration: 400 }}>
			<Icon icon="tabler:check" color="var(--clr-success-main)" width="0.9em" />
		</div>
	{:else if pending && statusIcons}
		<div class="icon-wrapper-right" transition:fly|local={{ x: 4, duration: 400 }}>
			<Icon icon="tabler:loader-2" color="var(--clr-tertiary-main)" class="rotate" width="0.9em" />
		</div>
	{/if}
</div>
<div class="helper-wrapper">
	{#if errors.length > 0}
		<HelperMessage message={errors[0]} type="error" />
	{:else if pending}
		<HelperMessage message={pendingMessage} type="loading" />
	{/if}
</div>

<style type="scss">
	label {
		padding-bottom: 0.2em;
		align-items: flex-start;
	}

	.input-wrapper {
		width: 100%;
	}

	.helper-wrapper {
		min-height: 1.4rem;
		display: flex;
		flex-direction: column;
	}

	.input-wrapper {
		position: relative;

		.icon-wrapper-left,
		.icon-wrapper-right {
			position: absolute;
			color: var(--clr-neutral-500);
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			width: auto;
			max-width: 3.4rem;
			min-width: 3rem;
			top: 0;
			padding: 0.5rem;
		}

		.icon-wrapper-left {
			left: 0;

			.icon-text {
				font-size: 10px;
				--font-weight: 700;
			}

			img {
				width: 26px;
			}
		}

		.icon-wrapper-right {
			right: 0;
			padding-right: 0.8rem;
			justify-content: flex-end;
		}

		:global(input:not(:focus) ~ .solid.icon-wrapper-left) {
			border-radius: 0.6rem 0 0 0.6rem;
			border-right: 1px var(--clr-border-primary) solid;
		}
		:global(input:not(:focus) ~ .solid.icon-wrapper-right) {
			border-radius: 0 0.6rem 0.6rem 0;
			border-left: 1px var(--clr-border-primary) solid;
		}
	}

	:global(input:focus ~ .solid) {
		border-right: 1px var(--clr-text-main) solid;
	}

	.input-wrapper:has(.icon-wrapper-left) {
		:global(input) {
			padding-left: 3.6rem;
		}
	}
	.input-wrapper:has(.icon-wrapper-right) {
		:global(input) {
			padding-right: 3.6rem;
		}
	}
</style>
