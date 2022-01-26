<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

<div class="p-4 md:w-1/3">
					<a
					sveltekit:prefetch
					href={`/blog/${post.slug}`}>
	<div class="h-full rounded-lg cursor-pointer bg-light-100 border border-light-300 hover:shadow-xl hover:shadow-mix-500/70 overflow-hidden">
		<SanityImage
			image={post.image.asset}
			maxWidth={402}
			alt={post.title}
			classes="w-full object-contain object-center"
		/>
		<div class="p-6">
			{#each post.categories || [] as cat}
				<span
					class="tracking-widest text-xs title-font font-medium text-green-700 mb-1 mr-3 uppercase"
					>{cat.title}</span
				>
			{/each}
			{#each post.technologies || [] as tech}
				<span
					class="tracking-widest text-xs title-font font-medium text-cerise-600 mb-1 mr-3 uppercase"
					><a href="/technology/{tech.slug.current}">{tech.title}</a></span
				>
			{/each}
			<h1 class="title-font text-lg font-medium text-mix-600 mb-3">{post.title}</h1>
			<p class="leading-relaxed mb-3">
				{post.excerpt ? post.excerpt : ''}
			</p>
			{#each post.tags || [] as tag}
				<span
					class="tracking-widest text-xs title-font font-medium text-indigo-700 mb-3 mr-3 uppercase"
					>#{tag.title}</span
				>
			{/each}
			<div class="flex items-center flex-wrap ">
				<a
					sveltekit:prefetch
					href={`/blog/${post.slug}`}
					class="text-azure-700 inline-flex items-center md:mb-2 lg:mb-0"
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
</a>
</div>
