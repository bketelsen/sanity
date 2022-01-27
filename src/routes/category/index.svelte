<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		try {
			const res = await fetch('/category/all.json');
			const { page, categories } = await res.json();

			return {
				props: { categories, page }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
	import CardGroup from '$lib/components/CardGroup.svelte';

	import SEO from '$lib/components/SEO.svelte';
	import { globalStore } from '$lib/stores/global';

	export let categories;
	export let page;
	console.log(categories);
</script>

<SEO {page} global={$globalStore} />

<PageWrapper>
	<PageTitle {...page} />
	<CardGroup>
		{#each categories as cat}
			<CategoryCard {cat} />
		{/each}
	</CardGroup>
</PageWrapper>
