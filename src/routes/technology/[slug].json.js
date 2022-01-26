import { AUTHOR_CARD_FRAGMENT } from '$lib/queries'
import { client } from '$lib/sanityClient'

// Gets a specific blog post from its slug.current value
export async function get({ params: { slug } }) {
  const tech = await client.fetch(/* groq */ `*[_type == "technology" && slug.current == "${slug}"][0]{
    ...,
    "relatedPosts": *[_type=='post' && references(^._id)]{ _type, slug, title }

  }`)

  if (tech) {
    return {
      status: 200,
      body: {
        tech
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
