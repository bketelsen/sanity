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
	export let sections;
	export let page;
	export let global;
</script>

<SEO page={page} global={global} />
<PageWrapper >
		<PageTitle {...page} />
		<Sections {sections} />
</PageWrapper>
