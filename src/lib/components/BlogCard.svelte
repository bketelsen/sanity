<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

<a sveltekit:prefetch href={`/blog/${post.slug}`}>
	<div class="card text-center shadow-2xl">
		<figure class="px-10 pt-10">
			<SanityImage image={post.image} maxWidth={402} alt={post.title} classes="rounded-xl" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{post.title}</h2>
			<p>{post.excerpt}</p>
			<div class="justify-center card-actions">
				<button class="mt-5 btn btn-outline btn-primary">Read More</button>
			</div>
			<div class="justify-center card-actions">
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
