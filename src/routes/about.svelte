<script context="module">
	export const prerender = true;
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/about.json');
			const data = await res.json();
			const { page } = data;
			const { global } = stuff;
			return {
				props: { global, page }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PortableText from '@portabletext/svelte';
	import Code from '$lib/components/Code.svelte';
	import Link from '$lib/components/Link.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import AuthorBlock from '$lib/components/AuthorBlock.svelte';
	import SEO from '$lib/components/SeoPage.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import { DateTime } from 'luxon';
	import { urlFor } from '$lib/sanityClient';

	export let page;
	export let global;
	// If we split it by "-", the 3rd element are the dimensions (1350x900)
	$: dimensions = page?.image?.asset?._ref?.split('-')[2];
	// If we split dimensions by "x", we get the width (1350) and height (900)
	$: [width, height] = dimensions.split('x').map(Number);

	$: aspectRatio = width / height;
</script>

<SEO {page} {global} />
<PageWrapper>
	<PageTitle
		subtitle={page.subtitle}
		title={page.title}
		herotext={page.herotext}
	/>
	<!-- Section: Design Block -->
	<section class="mb-20 ">
		<div class="grid grid-cols-1 justify-center">
			<div class="prose prose-lg lg:prose-xl xl:w-8/12 lg:w-10/12 mx-auto">
				<img
					src={urlFor(page.image).width(800).fit('fillmax')}
					alt={page.image.alt || page.title || ''}
					{height}
					{width}
					class="w-full rounded-lg"
				/>
				<PortableText
					blocks={page.body}
					serializers={{
						types: {
							code: Code,
							image: ImageBlock,
							authorReference: AuthorBlock
						},
						marks: {
							link: Link
						}
					}}
				/>
			</div>
		</div>
	</section>
</PageWrapper>
