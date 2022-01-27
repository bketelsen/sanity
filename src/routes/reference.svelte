<script context="module">
	export const prerender = true;
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/reference.json');
			const data = await res.json();
			const { page } = data;
			const { global } = stuff;
			return {
				props: { global, page }
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
	import Sections from '$lib/components/Sections.svelte';

	export let global;
	export let page;
	let sections = [
		{
			title: 'Categories',
			description: 'Categories',
			slug: {
				current: 'category'
			}
		},
		{
			title: 'Technologies',
			description: 'Technologies',
			slug: {
				current: 'technology'
			}
		},
		{
			title: 'Tags',
			description: 'Tags',
			slug: {
				current: 'tag'
			}
		}
	];
</script>

<SEO {page} {global} />

<PageWrapper>
	<PageTitle {...page} />
	<Sections {sections} />
</PageWrapper>
