<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		try {
			const res = await fetch('/technology/all.json');
			const { page, technologies } = await res.json();

			return {
				props: { technologies, page}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import TechCards from '$lib/components/TechCards.svelte';

	import SEO from '$lib/components/SEO.svelte';
	import { globalStore } from '$lib/stores/global';


	export let technologies;
	export let page;


</script>
<SEO page={page} global={$globalStore} />

<PageWrapper>
	<PageTitle {...page} />
	<TechCards {technologies} />

</PageWrapper>
