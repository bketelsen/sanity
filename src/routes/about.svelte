<script context="module">
	export const prerender=true;
	export async function load({ fetch }) {
		try {
			const res = await fetch('/about.json');
			const data = await res.json();
			return {
				props: data
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { globalStore } from '$lib/stores/global';


	export let page;
</script>
<SEO page={page} global={$globalStore} />

<PageWrapper >
		<PageTitle {...page} />
</PageWrapper>

