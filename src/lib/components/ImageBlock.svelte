<script>
	import SanityImage from './SanityImage.svelte';
	import { Lightbox } from 'svelte-lightbox';
	export let portableText;
	$: ({ block } = portableText);
</script>

{#if block.asset}
	<figure>
		<Lightbox
			thumbnail
			description={block.alt || ""}
			transitionDuration={250}
			>
			<SanityImage slot="thumbnail" image={block} />
			<SanityImage slot="image" maxWidth="1600" image={block} />
		</Lightbox>
		{#if block.caption}
			<figcaption>{block.caption}</figcaption>
		{/if}
	</figure>
{/if}
