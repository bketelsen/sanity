<script context="module">
	export const prerender = true;
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/technology/all.json');
			const { page, technologies } = await res.json();
			const { global } = stuff;

			return {
				props: { global, technologies, page }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import TechCard from '$lib/components/TechCard.svelte';
	import CardGroup from '$lib/components/CardGroup.svelte';

			import SEO from '$lib/components/SeoPage.svelte';


	export let technologies;
	export let page;
	export let global;
</script>

<SEO {page} {global} />

<PageWrapper>
	<PageTitle {...page} />
	<CardGroup>
		{#each technologies as tech}
			<TechCard {tech} />
		{/each}
	</CardGroup>
</PageWrapper>
