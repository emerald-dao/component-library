<script type="ts">
	import type { NavElement } from '$lib/models/navElement.interface';

	export let navElements: NavElement[];
</script>

<ul>
	{#each navElements as navElement}
		<a class="header-link" href={navElement.url}>
			<li>{navElement.name}</li>
		</a>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		gap: 4rem;
		padding: 0;
		align-items: center;

		li {
			font-size: var(--font-size-3);
		}

		@include mq(medium) {
			flex-direction: row;

			li {
				font-size: var(--font-size-1);
			}
		}
	}
</style>
