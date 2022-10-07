<script type="ts">
	import { Button } from '../index';

	export let logIn: () => void;
	export let unauthenticate: () => void;
	// TODO: apply user interface
	export let user: any;
	// export let getFindProfile: (address: string) => Promise<string>;

	// let findProfile = getFindProfile(user?.addr);
</script>

<div class="button-wrapper">
	{#if user?.loggedIn}
		<Button type="ghost" size="x-small" on:click={unauthenticate}>
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
		<Button size="x-small" on:click={logIn}><span>Connect</span></Button>
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
			@keyframes pulse {
				70% {
					-webkit-transform: scale(1.1);
					box-shadow: 0 0 0 1px var(--clr-primary-main-t6);
				}
				100% {
					-webkit-transform: scale(1);
					box-shadow: 0 0 0 3px var(--clr-primary-main-t9);
				}
			}

			.pulse {
				animation-name: pulse;
				animation-iteration-count: infinite;
				animation-timing-function: ease-out;
				animation-duration: 1.3s;
				animation-delay: 2s;
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
