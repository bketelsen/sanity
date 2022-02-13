import { getPostsQuery} from '$lib/queries'
import { client } from '$lib/sanityClient'

export const get = async () => {
  const data = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()}
  }`)

    const body = render(data.posts);
    const headers = {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml',
    };
    return {
      body,
      headers,
    };
  };

  const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
  <atom:link href="https://brian.dev/rss" rel="self" type="application/rss+xml" />
  <title>Brian Ketelsen</title>
  <link>https://brian.dev</link>
  <description>Brian Ketelsen's blog about life in the cloud.</description>
  ${posts
    .map(
      (post) => `<item>
  <guid>https://brian.dev${post.slug}</guid>
  <title>${post.title}</title>
  <link>https://brian.dev${post.slug}</link>
  <description>${post.excerpt}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>`
    )
    .join('')}
  </channel>
  </rss>
  `;
