<script context="module">
	export const prerender = true;
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/index.json');
			const data = await res.json();
			const { page, posts } = data;

			const { global, sections } = stuff;
			return {
				props: { global, sections, page, posts }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import RecentPosts from '$lib/components/RecentPosts.svelte';

	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import Sections from '$lib/components/Sections.svelte';
	import SEO from '$lib/components/SeoPage.svelte';

	export let page;
	export let posts;
	export let sections;
	export let global;
</script>

<SEO {page} {global} />
<PageWrapper>
	<PageTitle {...page} />
	<Sections {sections} />

	<RecentPosts {posts} />
</PageWrapper>
