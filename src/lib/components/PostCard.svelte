<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article>
  <h2>
    <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
  </h2>
  {#if post.image}
    <div class="image">
      <SanityImage image={post.image} maxWidth={300} />
    </div>
  {/if}
</article>

