import { AUTHOR_CARD_FRAGMENT } from '$lib/queries'
import { client } from '$lib/sanityClient'

// Gets a specific blog post from its slug.current value
export async function get({ params: { slug } }) {
  const cat = await client.fetch(/* groq */ `*[_type == "category" && slug.current == "${slug}"][0]{
    ...,
    "relatedPosts": *[_type=='post' && references(^._id)]{ _type, slug, title }

  }`)

  if (cat) {
    return {
      status: 200,
      body: {
        cat
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
