import { client } from '$lib/sanityClient'

// Gets a specific blog post from its slug.current value
export async function get({ params: { slug } }) {
  const tag = await client.fetch(/* groq */ `*[_type == "tag" && slug.current == "${slug}"][0]{
    ...,
    "relatedPosts": *[_type=='post' && references(^._id)]{ _type, slug, title }

  }`)

  if (tag) {
    return {
      status: 200,
      body: {
        tag
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
