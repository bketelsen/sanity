<script>
	export let sections;
</script>

<div class="flex flex-wrap">
	{#each sections as section}
		<div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-mix-700">
			<h2 class="text-lg font-mono sm:text-xl text-mix-500 font-bold title-font mb-2">
				{section.title}
			</h2>
			<p class="leading-relaxed text-base mb-4">
				{section.description}
			</p>
			<a href={section.slug.current} class="text-mix-700 inline-flex items-center"
				>Go To {section.title}
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-4 h-4 ml-2"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	{/each}
</div>
