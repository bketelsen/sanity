<script lang="ts">
	import Prism from 'prismjs';
	import { onMount } from 'svelte';

	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

	import 'prismjs/components/prism-bash.js';
	import 'prismjs/components/prism-css.js';
	import 'prismjs/components/prism-docker.js';
	import 'prismjs/components/prism-ini.js';
	import 'prismjs/components/prism-javascript.js';
	import 'prismjs/components/prism-json.js';
	import 'prismjs/components/prism-markup.js';
	import 'prismjs/components/prism-nix.js';
	import 'prismjs/components/prism-python.js';
	import 'prismjs/components/prism-rust.js';
	import 'prismjs/components/prism-go.js';
	import 'prismjs/components/prism-toml.js';
	import 'prismjs/components/prism-typescript.js';
	import 'prismjs/components/prism-yaml.js';

	onMount(async () => {
		Prism.highlightAll();
	});

	const extraLangMap = {
		sh: 'shell',
		golang: 'go'
	};

	const resolveLanguage = (lang: string) => {
		return extraLangMap[lang] || lang;
	};

	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps<{
		code: string;
		language: string;
		filename: string;
	}>;

	const codeBlock = portableText.block;
	$: lang = resolveLanguage(codeBlock.language);
</script>

<svelte:head>
	<link
		href="https://unpkg.com/prismjs@1.22.0/plugins/line-numbers/prism-line-numbers.css"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css" />
</svelte:head>

<!-- Only show line numbers when code has more than 8 lines -->
<div>
	{#if lang}
	<span class="rounded bg-secondary text-secondary-content pl-4 pr-4 p-2">
		{lang}
	</span>
	{/if}
	{#if codeBlock.filename }
	<span class="rounded bg-accent text-accent-content pl-4 pr-4 p-2">
		{codeBlock.filename}
	</span>
	{/if}
	<pre class="!m-0 {codeBlock.code.split('\n').length > 8 ? 'line-numbers' : ''}">
		<code class="!font-mono inline-block language-{resolveLanguage(codeBlock.language)}">
				{codeBlock.code}
		</code>
	</pre>
</div>

