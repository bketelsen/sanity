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
	import SanityFigure from '$lib/components/SanityFigure.svelte';
	import PostSidebar from '$lib/components/PostSidebar.svelte';
	import SEO from '$lib/components/SEO.svelte';

	export let post;
	export let global;
</script>

<SEO {post} {global} />

<main class="container max-w-3xl mx-auto xl:max-w-5xl px-4 xl:px-0">
	<article class="relative flex flex-col md:px-4 xl:grid xl:grid-cols-4 xl:col-gap-6">
		<div class="pb-4 md:mr-8 xl:pb-0 xl:mb-8 xl:col-span-3 mt-4 xl:mt-10">
			<h1
				class="text-3xl xl:text-4xl font-mono font-bold  mb-4 text-mix-600 leading-snug xl:leading-snug"
			>
				{post.title}
			</h1>
			<SanityFigure image={post.image} maxWidth={800} alt={post.image.alt} />
		</div>
		<div class="order-1 md:mr-8 xl:order-none xl:col-span-3 prose text-mix-800 lg:prose-lg mb-10">
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
		<PostSidebar {post} />
	</article>
</main>
