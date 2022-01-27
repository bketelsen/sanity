<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		try {
			const res = await fetch('/blog/all.json');
			const { page, postsByMonth } = await res.json();

			return {
				props: { postsByMonth, page }
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
	import { globalStore } from '$lib/stores/global';

	export let postsByMonth;
	export let page;
</script>

<SEO {page} global={$globalStore} />

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
