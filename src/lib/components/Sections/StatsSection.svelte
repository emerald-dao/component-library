<script type="ts">
	export let title = 'Join in on something big';
	export let background: string = 'transparent';
	export let bordersColor: string = 'transparent';
	export let data: Data = {
		data1: { title: 'Something', stat: '50M' },
		data2: { title: 'Something', stat: '190+' },
		data3: { title: 'Something', stat: '3.7B' }
	};

	interface StatData {
		title: string;
		stat: string;
	}

	interface Data {
		data1: StatData;
		data2: StatData;
		data3: StatData;
	}
</script>

<section style={`background-color: ${background}; border-block: 1px solid ${bordersColor}`}>
	<div class="container">
		<h3 class="w-medium">{title}</h3>
		<div class="columns-wrapper">
			{#each Object.values(data) as dataStat}
				<div class="separator" />
				<div class="column">
					<span class="h1 w-medium">{dataStat.stat}</span>
					<span class="small stat-name">{dataStat.title}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style type="scss">
	.container {
		display: flex;
		justify-content: center;
		gap: var(--space-7);
		flex-direction: column;

		@include mq('medium') {
			display: grid;
			grid-template-columns: 1fr 3fr;
			gap: 0;
		}

		h3 {
			text-align: center;
			@include mq('medium') {
				text-align: left;
			}
		}

		.columns-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-6);

			@include mq('medium') {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}

		.separator {
			display: none;

			@include mq('medium') {
				display: block;
				width: 1px;
				background-color: var(--clr-border-primary);
			}
		}

		.column {
			justify-content: center;
			align-items: center;
		}

		.stat-name {
			color: var(--clr-primary-main);
		}
	}
</style>
