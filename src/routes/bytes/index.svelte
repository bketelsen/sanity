<script context="module">
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/bytes/bytes.json');
			const data = await res.json();
			const { page, bytes } = data;
			const { global } = stuff;
			return {
				props: { global, page, bytes }
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import ByteGroup from '$lib/components/ByteGroup.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SEO from '$lib/components/SeoPage.svelte';

	export let global;
	export let page;
	export let bytes;
</script>

<SEO {page} {global} />
<PageWrapper>
	<PageTitle {...page} />
	<ByteGroup {bytes} />
</PageWrapper>
