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
	import Nav from '$lib/components/nav/Nav.svelte';
	import NavLink from '$lib/components/nav/NavLink.svelte';
</script>

<Nav>
	<div slot="logo">
		<a href="/" class="px-3 py-2 font-bold font-mono  text-2xl">{global.siteName} </a>
	</div>
	<NavLink link="/">Home</NavLink>
	{#each sections as section}
		<NavLink link={section.slug.current}>{section.title}</NavLink>
	{/each}
</Nav>

<div class="bodyContainer">
	<main>
		<slot />
	</main>
	<Footer {global} />
</div>
