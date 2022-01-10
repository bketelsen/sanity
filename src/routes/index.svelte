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
	import PageTitle from "$lib/components/PageTitle.svelte";
	import Sections from "$lib/components/Sections.svelte";
	export let global;
	export let sections;
	export let page;
</script>?
<section class="text-gray-400 body-font bg-gray-900">
	<div class="container px-5 py-5 lg:py-24 mx-auto">
		<PageTitle {...page} />
		<Sections {sections} />

	</div>
</section>
