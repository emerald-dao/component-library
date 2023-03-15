<script type="ts">
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import 'prismjs/plugins/toolbar/prism-toolbar.css';
	import 'prismjs/plugins/toolbar/prism-toolbar';
	import 'prismjs/plugins/line-numbers/prism-line-numbers';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
	import 'prismjs/plugins/show-language/prism-show-language';
	import 'prismjs/components/prism-swift';

	// import '/prism/prism.js';

	export let language: string;
	export let code: string;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="code" data-prismjs-copy-timeout="1000">
	<pre class={`language-${language} line-numbers copy-to-clipboard`}>
		<code class={`language-${language}`} data-prismjs-copy="Click to copy code!">
			{@html Prism.highlight(code, Prism.languages[language])}
		</code>
	</pre>
</div>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-night-owl.min.css"
		integrity="sha512-MXRiGOm1i9a1yooXJgIZhA+q5XHvP+iHXn0ardNqqdE3ixpQBvjR0NCkFTR0Jic6jmhhnpviB87P+tK3zuzuSg=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<style>
	pre {
		border: 1px var(--clr-border-primary) solid;
		border-radius: var(--radius-2);
		padding: 0;
		margin: 0;
		background-color: var(--clr-surface-primary);
	}

	code[class*='language-'],
	pre[class*='language-'] {
		color: var(--clr-text-main);
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background: var(--clr-surface-primary);
	}
</style>
