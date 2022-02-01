<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

	<a sveltekit:prefetch href={`/blog/${post.slug}`}>
		<div class="card image-full shadow-lg shadow-primary/25 hover:shadow-primary/75 ">
			<figure class="">
				<SanityImage image={post.image.asset} maxWidth={402} alt={post.title} classes="" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{post.title}</h2>
				<p>{post.excerpt}</p>
				<div class="mt-5 justify-end card-actions">
					<button class="btn btn-secondary text-secondary-content transition ease-in-out delay-150 hover:scale-105 ">Read More</button>
				</div>
				<div class="justify-end card-actions">
					{#each post.categories || [] as cat}
						<div class="category"><a href="/category/{cat.slug.current}">{cat.title}</a></div>
					{/each}
					{#each post.technologies || [] as tech}
						<div class="technology"><a href="/technology/{tech.slug.current}">{tech.title}</a></div>
					{/each}

					{#each post.tags || [] as tag}
						<div class="tag"><a href="/tag/{tag.slug.current}">#{tag.title}</a></div>
					{/each}
				</div>
			</div>
		</div>
	</a>
