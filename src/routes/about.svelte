<script context="module">
	export const prerender=true;
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/about.json');
			const data = await res.json();
			const {page} = data;
			const {global} = stuff;
			return {
				props: {global, page}
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


	export let page;
	export let global;

</script>
<SEO {page} {global} />

<PageWrapper >
		<PageTitle {...page} />
</PageWrapper>

