<script>
  import {urlFor} from '$lib/sanityClient'

  export let image
  export let maxWidth = 1200
  export let alt = undefined
  export let classes
 </script>

{#if image}
  <img
    src={urlFor(image).width(maxWidth).fit('crop').crop('focalpoint').auto('format')}
    alt={alt || image.alt || ''}
    class={classes}
    style="aspect-ratio: {image.metadata.dimensions.aspectRatio};"
  />
{/if}
