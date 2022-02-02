<script>
  import SanityImage from './SanityImage.svelte'

  export let image;
  export let maxWidth = 800;
    export let classes;



</script>

{#if image.asset}
  <figure>
    <SanityImage image={image} {maxWidth} {classes}/>
    {#if image.caption}
      <figcaption class="text-center pt-2 italic">{image.caption}</figcaption>
    {/if}
  </figure>
{/if}
