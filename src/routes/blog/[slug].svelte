<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/blog/${params.slug}.json`
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
  import PostSidebar from '$lib/components/PostSidebar.svelte';
	import SEO from '$lib/components/SEO.svelte';
		import { globalStore } from '$lib/stores/global';

  export let post
</script>


<SEO post={post} global={$globalStore} />

<main class="container max-w-3xl mx-auto xl:max-w-5xl px-4 xl:px-0">
  <article class="relative flex flex-col md:px-4 xl:grid xl:grid-cols-4 xl:col-gap-6">
    <div class="pb-4 md:mr-8 xl:pb-0 xl:mb-8 xl:col-span-3 mt-4 xl:mt-10">
      <h2 class="text-3xl xl:text-4xl font-bold mb-4 text-white leading-snug xl:leading-snug" >{post.title}</h2>
    </div>
    <div
      class="order-1 space-y-16 md:mr-8 xl:order-none xl:col-span-3 prose lg:prose-lg dark:prose-dark">
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



      <hr class="border-gray-200 dark:border-gray-800" />

    </div>
    <PostSidebar {post}/>
  </article>
</main>
