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
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
	<header class="text-gray-400 bg-gray-900 body-font">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
					viewBox="0 0 24 24"
				>
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
				</svg>
				<span class="ml-3 text-xl">{global.headerTitle}</span>
			</a>
			<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
				{#each sections as section}
				<a href={section.slug.current} class="mr-5 hover:text-white">{section.title}</a>
				{/each}

			</nav>

			<button
				class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
				>Reference
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

		</div>
	</header>
	<main class="mb-auto">
		<slot />
	</main>

	<Footer {global} />
</div>
