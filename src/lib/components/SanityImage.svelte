<script>
  import {urlFor} from '$lib/sanityClient'

  export let image
  export let maxWidth = 1200
  export let alt = undefined
  export let classes

  // Once loaded, the image will transition to full opacity
  let loaded = false
</script>

{#if image}
  <img
    loading="lazy"
    src={urlFor(image).width(maxWidth).fit('fillmax').auto('format')}
    alt={alt || image.alt || ''}
    class={classes}
    style="aspect-ratio: {image.metadata.dimensions}; opacity: {loaded ? 1 : 0}; transition: .2s opacity;"
    on:load={() => (loaded = true)}
  />
{/if}
