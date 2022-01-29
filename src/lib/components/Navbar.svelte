<script>
	export let global;
	export let sections;
</script>

<header class="text-gray-600 body-font">
	<div
		class="container mx-auto bg-gradient-to-t from-light-200 to-azure-300 rounded-lg shadow shadow-xl flex flex-wrap p-5 flex-col md:flex-row items-center"
	>
		<a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
			<span class="ml-3 text-xl">{global.siteName}</span>
		</a>
		<nav
			class="md:ml-auto flex flex-wrap items-center text-lg font-bold text-gray-900 justify-center"
		>
			{#each sections as section}
				<a sveltekit:prefetch href="/{section.slug.current}" class="mr-5 hover:text-azure-600">{section.title}</a>
			{/each}
		</nav>
	</div>
</header>
