import { pageQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all valid posts & authors to display in the homepage
export async function get() {
  const data = await client.fetch(/* groq */ `{
     ${pageQuery}
  }`,
    { slug: "/about/" }
)

  if (data) {
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
