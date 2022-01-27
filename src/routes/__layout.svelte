<script context="module">
	export async function load({ fetch }) {

		try {
			const res = await fetch('/global.json');
			const data = await res.json();
			const {global,sections} = data;

			return {
				props: {global, sections},
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

</script>

<div class="bodyContainer">
	<header class="navHeader">
		<div class="navContainer">
			<a sveltekit:prefetch href="/" class="navTitle">
				<span class="md:ml-3 text-xl ">{global.headerTitle}</span>
			</a>
			<nav class="navBar">
				{#each sections as section}
				<a sveltekit:prefetch href='/{section.slug.current}' class="navItem">{section.title}</a>
				{/each}

			</nav>


		</div>
	</header>
	<main>
		<slot />
	</main>

	<Footer {global} />
</div>
