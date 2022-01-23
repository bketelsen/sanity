<script context="module">
	export async function load({ fetch }) {
		try {
			const res = await fetch('/index.json');
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
	import Sections from '$lib/components/Sections.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { globalStore } from '$lib/stores/global';
	import { sectionStore } from '$lib/stores/sections';


	export let page;

</script>

<SEO page={page} global={$globalStore} />
<PageWrapper >
		<PageTitle {...page} />
		<Sections sections={$sectionStore} />
</PageWrapper>
