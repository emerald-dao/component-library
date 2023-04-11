<script type="ts">
	import Icon from '@iconify/svelte';
	import HelperMessage from './HelperMessage.svelte';
	import { fade } from 'svelte/transition';
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
	export let prefix: string | null = null;
	export let hasBorder = false;
</script>

<div>
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
	<div class="input-wrapper" class:no-border={!hasBorder}>
		{#if icon || iconUrl || iconText}
			<div class="icon-wrapper-left">
				{#if icon}
					<Icon {icon} />
				{:else if iconUrl}
					<img src={iconUrl} alt="Form helper icon" />
				{:else if iconText}
					<span>{iconText}</span>
				{/if}
			</div>
		{/if}
		{#if prefix}
			<span class="prefix">
				{prefix}
			</span>
		{/if}
		<slot />
		{#if errors.length > 0 && statusIcons}
			<div class="icon-wrapper-right" transition:fade|local={{ duration: 400 }}>
				<Icon icon="tabler:alert-circle" color="var(--clr-alert-main)" width="0.9em" />
			</div>
		{:else if isValid && statusIcons}
			<div class="icon-wrapper-right" transition:fade|local={{ duration: 400 }}>
				<Icon icon="tabler:check" color="var(--clr-success-main)" width="0.9em" />
			</div>
		{:else if pending && statusIcons}
			<div class="icon-wrapper-right" transition:fade|local={{ duration: 400 }}>
				<Icon
					icon="tabler:loader-2"
					color="var(--clr-tertiary-main)"
					class="rotate"
					width="0.9em"
				/>
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
</div>

<style type="scss">
	label {
		padding-bottom: 6px;
		align-items: flex-start;
	}

	.input-wrapper {
		width: 100%;
		border: 1px var(--clr-border-primary) solid;
		border-radius: var(--radius-1);
		display: flex;
		flex-direction: row;
		transition: 0.2s;

		.icon-wrapper-left,
		.icon-wrapper-right,
		.prefix {
			color: var(--clr-text-off);
			display: flex;
			align-items: center;
			flex-direction: row;
			padding-inline: 0.5rem;
			transition: 0.2s;
		}

		.icon-wrapper-left,
		.prefix {
			border-right: 1px var(--clr-border-primary) solid;
			justify-content: center;
		}

		.icon-wrapper-left {
			min-width: 3rem;

			img {
				width: 26px;
			}

			span {
				font-size: var(--font-size-1);
			}
		}

		.prefix {
			font-size: var(--font-size-1);
			background-color: var(--clr-neutral-badge);
		}

		&:has(input:focus) {
			border-color: var(--clr-text-main);

			.icon-wrapper-left {
				border-right-color: var(--clr-text-main);
				color: var(--clr-text-main);
			}
		}

		:global(input) {
			display: flex;
			flex: 1;
			border: none;
			padding-inline: var(--space-2) var(--space-1);
		}
	}

	.helper-wrapper {
		min-height: 1.4rem;
		display: flex;
		flex-direction: column;
	}

	.no-border {
		border: none;

		.icon-wrapper-left,
		.icon-wrapper-right,
		.prefix {
			border: none;
		}
	}
</style>
