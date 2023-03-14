<script type="ts">
	export let language: string;
	export let code: string;
</script>

<div class="container" data-prismjs-copy-timeout="500">
	<p>Language: {language}</p>
	<pre class="language-javascript line-numbers">	
		<code class="language-javascript" data-prismjs-copy="Copy the JavaScript snippet!">
			{code}
		</code>
    </pre>
</div>

<style type="scss">
	.container {
		p {
			margin-top: var(--space-4);
		}
	}

	pre {
		border: 1px var(--clr-border-primary) solid;
		border-radius: var(--radius-2);
		padding: 0;
		margin: 0;
		background-color: transparent;
	}
</style>
