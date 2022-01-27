<script context="module">
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/blog/all.json');
			const { page, postsByMonth } = await res.json();
			const {global} = stuff;

			return {
				props: { global, postsByMonth, page }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import CardGroup from '$lib/components/CardGroup.svelte';

	import BlogCard from '$lib/components/BlogCard.svelte';
	import dateFormat from 'date-fns/format/index.js';
	import SEO from '$lib/components/SEO.svelte';

	export let postsByMonth;
	export let page;
	export let global;
</script>

<SEO {page} {global} />

<PageWrapper>
	<PageTitle {...page} />
	{#each postsByMonth as month}
		<h1 class="sm:text-3xl text-2xl font-medium font-mono mt-8 mb-4 text-mix-600">
			{dateFormat(new Date(month.date), 'MMMM yyyy')}
		</h1>
		<CardGroup>
			{#each month.posts as post}
				<BlogCard {post} />
			{/each}
		</CardGroup>
	{/each}
</PageWrapper>
