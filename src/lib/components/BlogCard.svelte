<script>
	export let post;
	import SanityImage from './SanityImage.svelte';
</script>

<a sveltekit:prefetch href={`/blog/${post.slug}`}>

<div class="card text-center shadow-2xl">
  <figure class="px-10 pt-10">
		<SanityImage
			image={post.image.asset}
			maxWidth={402}
			alt={post.title}
			classes=""
		/>  </figure>
  <div class="card-body">
    <h2 class="card-title">{post.title}</h2>
    <p>{post.excerpt}</p>
    <div class="justify-end card-actions">
      <button class="btn btn-secondary">Read More</button>
    </div>
  </div>
</div>



</a>
