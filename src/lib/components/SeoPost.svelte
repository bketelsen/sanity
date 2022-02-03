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
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    type: "article",
    url: global.siteUrl + "/blog/" + post.scopedSlug.current,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      expirationTime: "2025-12-21T17:31:37Z",
      section: post.tags[0].title,
      authors: [
        "Brian Ketelsen",

      ],
      tags: tags,
    },
    images: [
      {
        url: "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/" + post.scopedSlug.current,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
  }}
    twitter={{
    site: "@bketelsen",
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    image: "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/" + post.scopedSlug.current,
    imageAlt: post.title
  }}
    jsonLd={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': global.siteUrl + post.scopedSlug.current,
    },
    headline: post.seo?.metaTitle || post.title,
    image: [
 "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/" + post.scopedSlug.current
    ],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Brian Ketelsen',
    }

  }}
/>
