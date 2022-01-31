<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

<a sveltekit:prefetch href={`/blog/${post.slug}`}>
	<div
		class="mx-2 my-4 max-w-xs cursor-pointer  border border-gray-100 shadow-lg hover:shadow-2xl rounded p-4 hover:bg-azure-100"
	>
		<SanityImage
			image={post.image.asset}
			maxWidth={402}
			alt={post.title}
			classes="rounded object-cover w-full h-48"
		/>
		<div class="p-6">
			<ul class="flex flex-wrap">
				{#each post.categories || [] as cat}
					<li class="category"><a href="/category/{cat.slug.current}">{cat.title}</a></li>
				{/each}

				{#each post.technologies || [] as tech}
					<li class="technology"><a href="/technology/{tech.slug.current}">{tech.title}</a></li>
				{/each}
				{#each post.tags || [] as tag}
				<li class="tag"><a href="/tag/{tag.slug.current}">#{tag.title}</a></li>
			{/each}
			</ul>
			<h1 class="font-bold text-xl md:text-2xl pt-6 pb-4">{post.title}</h1>
			<p class="text-md text-gray-800 pb-2">
				{post.excerpt ? post.excerpt : ''}
			</p>

		</div>
	</div>
</a>
