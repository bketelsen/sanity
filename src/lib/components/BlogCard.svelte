<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

<div class="card shadow-xl image-full">
	<figure>
		<SanityImage image={post.image} maxWidth={402} alt={post.title} classes="rounded-xl" />
	</figure>
	<div class="justify-end card-body">
		<h2 class="card-title">{post.title}</h2>
		<p>{post.excerpt}</p>
		<div class="justify-center card-actions">
			<button class="mt-5 btn btn-outline btn-accent">Read More</button>
		</div>
		<div class="justify-center card-actions">
			{#each post.tags || [] as tag}
				<div class="tag"><a href={tag.scopedSlug.current}>#{tag.taxonomy.title}</a></div>
			{/each}
		</div>
	</div>
</div>
