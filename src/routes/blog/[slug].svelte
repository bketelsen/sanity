<script context="module">
	export const prerender = true;

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
	import PortableText from '@portabletext/svelte';
	import Code from '$lib/components/Code.svelte';
	import Link from '$lib/components/Link.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import AuthorBlock from '$lib/components/AuthorBlock.svelte';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import { DateTime } from 'luxon';

	export let post;
	export let global;
</script>

<SEO {post} {global} />
<PageWrapper>
	<PageTitle subtitle="article" title={post.title} herotext={DateTime.fromISO(post.publishedAt).toLocaleString(DateTime.DATE_FULL)} />
	<!-- Section: Design Block -->
	<section class="mb-20 ">
		<div class="grid grid-cols-1 justify-center">
			<div class="prose prose-lg lg:prose-xl xl:w-8/12 lg:w-10/12 mx-auto">
            <SanityImage image={post.image} maxWidth={1200} alt={post.image.alt} classes="w-full rounded-lg"/>

				<PortableText
					blocks={post.body}
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
