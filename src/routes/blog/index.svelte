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
	import BlogCards from '$lib/components/BlogCards.svelte';
	import dateFormat from 'date-fns/format';
	export let postsByMonth;
	export let page;

	console.log(postsByMonth)
</script>

<PageWrapper>
	<PageTitle {...page} />
	{#each postsByMonth as month }
    <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 mb-4 text-white">
		{dateFormat(new Date(month.date), 'MMMM yyyy')}</h1>
	<BlogCards posts={month.posts} />
	{/each}
</PageWrapper>
