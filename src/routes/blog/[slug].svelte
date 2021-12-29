<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/blog/${page.params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data?.post) {
        return {
          props: data
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/components/Code.svelte'
  import Link from '$lib/components/Link.svelte'
  import ImageBlock from '$lib/components/ImageBlock.svelte'
  import AuthorBlock from '$lib/components/AuthorBlock.svelte'
  import AuthorCard from '$lib/components/AuthorCard.svelte'
  import SanityImage from '$lib/components/SanityImage.svelte'

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
  Published {new Date(post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
</p>

{#each post.authors || [] as author}
  <AuthorCard {author} />
{/each}

<hr />

{#if post.image}
  <SanityImage image={post.image} />
{/if}

<PortableText
  blocks={post.body}
  serializers={{
    types: {
      code: Code,
      image: ImageBlock,
      authorReference: AuthorBlock
    },
    marks: {
      link: Link
    }
  }}
/>
