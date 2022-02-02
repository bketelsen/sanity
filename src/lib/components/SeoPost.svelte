<script>
    export let post;
    export let global;
    import SvelteSeo from "svelte-seo";
    let tags = [];
    post.tags.forEach(flattenTags)
    function flattenTags(value, index, array)  {
        tags.push(value.title);
    };
</script>

<SvelteSeo
openGraph={{
    title: post.title,
    description: post.excerpt,
    type: "article",
    url: global.siteUrl + "/blog/" + post.slug.current,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      expirationTime: "2025-12-21T17:31:37Z",
      section: post.categories[0].title,
      authors: [
        "https://www.example.com/authors/@firstnameA-lastnameA",
        "https://www.example.com/authors/@firstnameB-lastnameB",
      ],
      tags: tags,
    },
    images: [
      {
        url: "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/blog/" + post.slug.current,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
  }}
    twitter={{
    site: "@bketelsen",
    title: post.title,
    description: post.excerpt,
    image: "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/blog/" + post.slug.current,
    imageAlt: post.title
  }}
    jsonLd={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://example.com/article'
    },
    headline: post.title,
    image: [
 "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/blog/" + post.slug.current
    ],
    datePublished: '2020-08-03T17:31:37Z',
    dateModified: '2020-08-20T09:31:37Z',
    author: {
      '@type': 'Person',
      name: 'Brian Ketelsen',
    }

  }}
/>
