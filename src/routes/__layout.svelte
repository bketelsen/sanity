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

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bodyContainer">
	<Navbar {global} {sections} />
	<main>
		<slot />
	</main>

	<Footer {global} />
</div>
