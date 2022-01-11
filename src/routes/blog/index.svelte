<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		try {
			const res = await fetch('/blog/all.json');
			const { page ,posts} = await res.json();

			return {
				props: {posts,page}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
  import BlogCards from '$lib/components/BlogCards.svelte';
  export let posts;
  export let page;

</script>

<PageWrapper >
  <PageTitle {...page} />
  <BlogCards {posts} />
</PageWrapper>
