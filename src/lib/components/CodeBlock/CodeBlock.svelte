<script type="ts">
	import Prism from 'prismjs';
	import 'prismjs/plugins/line-numbers/prism-line-numbers';
	import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
	import 'prismjs/plugins/toolbar/prism-toolbar.min';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
	import 'prismjs/plugins/show-language/prism-show-language.min';
	import 'prismjs/components/prism-swift';

	// import '/prism/prism.js';

	export let language: string;
	export let code: string;
</script>

<div class="code" data-prismjs-copy-timeout="500">
	<p>Language: {language}</p>
	<pre class="language-swift line-numbers copy-to-clipboard">
		<code class="language-swift" data-prismjs-copy="Copy the JavaScript snippet!">
			{@html Prism.highlight(code, Prism.languages[language])}
		</code>
	</pre>
</div>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<style type="scss">
	.container {
		p {
			margin-top: var(--space-4);
		}
	}

	.code {
		white-space: pre-wrap;
		text-shadow: none;
	}

	pre {
		border: 1px var(--clr-border-primary) solid;
		border-radius: var(--radius-2);
		padding: 0;
		margin: 0;
		background-color: transparent;
	}
</style>
