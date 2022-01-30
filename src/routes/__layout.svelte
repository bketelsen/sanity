<script context="module">
	export async function load({ fetch }) {
		try {
			const res = await fetch('/global.json');
			const data = await res.json();
			const { global, sections } = data;

			return {
				props: { global, sections },
				stuff: {
					global,
					sections
				}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	export let global;
	export let sections;
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Announcement from '$lib/components/Announcement.svelte';
	console.log(global)
</script>

<Navbar {sections} {global} />
{#if global.announcement}
<Announcement announcement={global.announcement} />
{/if}
<div class="bodyContainer">
	<main>
		<slot />
	</main>
	<Footer {global} />
</div>
