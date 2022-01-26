<script context="module">
	export async function load({ fetch }) {

		try {
			const res = await fetch('/global.json');
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
	export let global;
	export let sections;
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import { globalStore } from '$lib/stores/global';
	import { sectionStore } from '$lib/stores/sections';

	$globalStore = global;
	$sectionStore = sections;
</script>

<div class="flex flex-col h-screen justify-between bg-light-100">
	<header class="text-light-200 bg-mix-600 body-font">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<a sveltekit:prefetch href="/" class="flex title-font font-medium items-center text-light-200 hover:text-white mb-4 md:mb-0">
				<span class="ml-3 text-xl">{global.headerTitle}</span>
			</a>
			<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
				{#each sections as section}
				<a sveltekit:prefetch href='/{section.slug.current}' class="mr-5 text-light-200 hover:text-white">{section.title}</a>
				{/each}

			</nav>
			<a href="/technology">
			<button
				class="inline-flex items-center text-mix-800 bg-light-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
				>Tech Library
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-4 h-4 ml-1"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</button>
			</a>

		</div>
	</header>
	<main class="mb-auto bg-light-200">
		<slot />
	</main>

	<Footer {global} />
</div>
