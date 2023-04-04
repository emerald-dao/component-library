<script type="ts">
	import type { User } from '$lib/models/user.interface';
	import Icon from '@iconify/svelte';
	import { Button } from '../../index';

	export let logIn: () => void;
	export let unauthenticate: () => void;
	// TODO: apply user interface
	export let user: User | null;
	export let buttonSize: 'small' | 'x-small' = 'small';
	// export let getFindProfile: (address: string) => Promise<string>;

	// let findProfile = getFindProfile(user?.addr);
</script>

<div class="button-wrapper">
	{#if user?.addr}
		<Button type="ghost" color="neutral" size="x-small" on:click={unauthenticate}>
			<div class="button-content">
				<div class="conection-circle pulse" />
				<span class="user">
					<!-- {#await findProfile then profile}
						{#if profile}
							{profile.name}
						{:else} -->
					{user.addr}
					<!-- {/if}
					{/await} -->
				</span>
				<span class="disconnect"> Disconnect </span>
			</div>
		</Button>
	{:else}
		<Button size={buttonSize} color="primary" on:click={logIn}>
			Connect
			<Icon icon="tabler:wallet" />
		</Button>
	{/if}
</div>

<style type="scss">
	.button-wrapper {
		.button-content {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
			gap: 0.6rem;

			.conection-circle {
				width: 0.5em;
				height: 0.5em;
				border-radius: 99999px;
				background-color: var(--clr-primary-main);
			}

			.disconnect {
				display: none;
			}
		}
	}

	span {
		font-size: var(--fs-300);
	}
	.button-wrapper:hover .user {
		visibility: hidden;
	}
	.button-wrapper:hover .disconnect {
		display: block;
		position: absolute;
		text-align: left;
	}
	.button-wrapper:hover .conection-circle {
		background-color: red;
	}
	.button-wrapper:hover .pulse {
		animation: none;
	}
</style>
