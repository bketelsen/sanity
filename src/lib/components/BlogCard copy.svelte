<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

<div class="p-4 md:w-1/3">
	<a sveltekit:prefetch href={`/blog/${post.slug}`}>
		<div class="card shadow-xl image-full">
			<SanityImage
				image={post.image.asset}
				maxWidth={402}
				alt={post.title}
				classes=""
			/>
			<div class="p-6">
				{#each post.categories || [] as cat}
					<span class="category"><a href="/category/{cat.slug.current}">{cat.title}</a></span>
				{/each}
				{#each post.technologies || [] as tech}
					<span class="technology"><a href="/technology/{tech.slug.current}">{tech.title}</a></span>
				{/each}
				<h1 class="text-xl mt-2 font-bold text-mix-600 mb-3">{post.title}</h1>
				<p class="leading-relaxed mb-3">
					{post.excerpt ? post.excerpt : ''}
				</p>
				{#each post.tags || [] as tag}
					<span class="tag"><a href="/tag/{tag.slug.current}">#{tag.title}</a></span>
				{/each}
				<div class="mt-2 flex items-center flex-wrap ">
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
