<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		try {
			const res = await fetch('/tag/all.json');
			const { page, tags } = await res.json();

			return {
				props: { tags, page }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import TagCard from '$lib/components/TagCard.svelte';
	import CardGroup from '$lib/components/CardGroup.svelte';

	import SEO from '$lib/components/SEO.svelte';
	import { globalStore } from '$lib/stores/global';

	export let tags;
	export let page;
	console.log(tags);
</script>

<SEO {page} global={$globalStore} />

<PageWrapper>
	<PageTitle {...page} />
	<CardGroup>
		{#each tags as tag}
			<TagCard {tag} />
		{/each}
	</CardGroup>
</PageWrapper>
