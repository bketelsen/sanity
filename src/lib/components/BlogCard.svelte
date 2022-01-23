<script>
	export let post;
	import SanityImage from './SanityImage.svelte';

</script>

<div class="p-4 md:w-1/3">
	<div class="h-full  bg-gray-900 overflow-hidden">
		<SanityImage
			image={post.image.asset}
			maxWidth={402}
			alt={post.title}
			classes="lg:h-48 md:h-36 w-full object-contain object-center"
		/>
		<div class="p-6">
			{#each post.categories || [] as cat}
				<span class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1 mr-3 uppercase"
					>{cat.title}</span
				>
			{/each}
			{#each post.technologies || [] as tech}
				<span class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1 mr-3 uppercase"
					>{tech.title}</span
				>
			{/each}
			<h1 class="title-font text-lg font-medium text-white mb-3">{post.title}</h1>
			<p class="leading-relaxed mb-3">
				{post.excerpt ? post.excerpt : ''}
			</p>
			{#each post.tags || [] as tag}
				<span class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1 mr-3 uppercase"
					>{tag.title}</span
				>
			{/each}
			<div class="flex items-center flex-wrap ">
				<a sveltekit:prefetch
					href={`/blog/${post.slug}`}
					class="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0"
					>Read Now
					<svg
						class="w-4 h-4 ml-2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
						<path d="M12 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>
