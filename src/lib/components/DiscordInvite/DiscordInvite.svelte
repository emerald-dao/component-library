<script type="ts">
	import Icon from '@iconify/svelte';
	import { Column } from '@mateoroldos/svelte.bones';
	import Button from '../Button/Button.svelte';

	export let background = false;
</script>

<div class:background>
	<Column>
		<span>Emerald City DAO</span>
		<h2>Join the community</h2>
		<p>
			We are the first DAO on the Flow Blockchain
			<br />
			<b>Educate, build and govern</b>
		</p>
		<Button
			target="_blank"
			href="https://discord.com/invite/emeraldcity"
			color={background ? 'neutral' : undefined}
			size="large"
		>
			<Icon icon="akar-icons:discord-fill" />
			Join Discord
		</Button>
	</Column>
</div>

<style type="scss">
	div {
		text-align: center;
		padding: 3rem;
		border-radius: 2rem;

		span {
			font-family: var(--ff-mono);
		}
	}

	.background {
		background-color: var(--clr-primary-main);
		color: var(--clr-font-text-inverse);

		h2 {
			color: var(--clr-font-text-inverse);
		}
	}
</style>
