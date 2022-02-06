<script context="module">

	export async function load({ params, fetch, stuff }) {
		try {
			const url = `/blog/${params.slug}.json`;
			const res = await fetch(url);
			const data = await res.json();
			const { post } = data;
			const { global } = stuff;

			if (data?.post) {
				return {
					props: { global, post }
				};
			}
		} catch (err) {
			return {
				status: 500,
				error: new Error(`Could not load url`)
			};
		}
	}
</script>

<script>
	import { Lightbox } from 'svelte-lightbox';
	import PortableText from '@portabletext/svelte';
	import Code from '$lib/components/Code.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Link from '$lib/components/Link.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import AuthorBlock from '$lib/components/AuthorBlock.svelte';
	import SEO from '$lib/components/SeoPost.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import { DateTime } from 'luxon';
	import { urlFor } from '$lib/sanityClient';

	export let post;
	export let global;
	// If we split it by "-", the 3rd element are the dimensions (1350x900)
	$: dimensions = post?.image?.asset?._ref?.split('-')[2];
	// If we split dimensions by "x", we get the width (1350) and height (900)
	$: [width, height] = dimensions.split('x').map(Number);
</script>

<SEO {post} {global} />
<PageWrapper>
	<PageTitle
		subtitle="article"
		title={post.title}
		herotext={DateTime.fromISO(post.publishedAt).toLocaleString(DateTime.DATE_FULL)}
	/>
	<!-- Section: Design Block -->
	<div class="relative py-8 bg-base-100 overflow-hidden">
		<div class="relative px-4 sm:px-6 lg:px-8">
			<div class="mt-6 prose  prose-lg text-content-base mx-auto">
				<Lightbox thumbnail description={post.image.alt || post.title || ''}>
					<img
						slot="thumbnail"
						src={urlFor(post.image).width(800).fit('fillmax')}
						alt={post.image.alt || post.title || ''}
						{height}
						{width}
						class="w-full rounded-lg shadow-2xl"
					/>
										<img
						slot="image"
						src={urlFor(post.image).width(1600).fit('fillmax')}
						alt={post.image.alt || post.title || ''}
						{height}
						{width}
						class="w-full rounded-lg shadow-2xl"
					/>
				</Lightbox>

				<PortableText
					blocks={post.body}
					serializers={{
						types: {
							code: Code,
							image: ImageBlock,
							authorReference: AuthorBlock
						},
						marks: {
							link: Link,
							highlight: Highlight
						}
					}}
				/>
			</div>
		</div>
	</div>
</PageWrapper>
