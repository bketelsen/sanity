import { getPostsQuery} from '$lib/queries'
import { client } from '$lib/sanityClient'


// Fetch all valid posts & authors to display in the homepage
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()}
  }`)

  const {  posts } = data;
  if (data) {
    return {
      status: 200,
      body: { posts}
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
