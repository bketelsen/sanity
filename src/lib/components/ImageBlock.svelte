<script>
  import SanityImage from './SanityImage.svelte'

  export let portableText
  $: ({block} = portableText);


</script>

{#if block.image}
  <figure>
    <SanityImage image={block.image} alt={block.alt} classes="rounded-xl"/>
    {#if block.caption}
      <figcaption>{block.caption}</figcaption>
    {/if}
  </figure>
{/if}
