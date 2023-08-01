<script lang="ts">
	import Icon from '@iconify/svelte';
	import WalletLabel from './WalletLabel.svelte';
	import type { Profile } from '../profile.interface';

	export let profile: Profile;
	export let fontSize = 'var(--font-size-1)';
	export let walletFontSize = '0.85em';
	export let showWallet = true;
</script>

<div class="main-wrapper" style={`font-size: ${fontSize}`}>
	{#if profile.name}
		<div class="username-wrapper align-center">
			<span class="username">{profile.name}</span>
			{#if profile.type === 'find'}
				<Icon icon="tabler:discount-check-filled" color="var(--clr-primary-main)" width="0.9em" />
			{/if}
		</div>
	{/if}
	{#if showWallet}
		<WalletLabel
			address={profile.address}
			withBorder={false}
			color="var(--clr-text-off)"
			fontSize={walletFontSize}
		/>
	{/if}
</div>

<style lang="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;

		.username-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.3em;
			margin-bottom: 0.3em;

			.username {
				color: var(--clr-heading-main);
				font-size: 1em;
				line-height: 1.1;
			}
		}
	}
</style>
