<script>
    export let page;
    export let global;
    import SvelteSeo from "svelte-seo";

</script>

<SvelteSeo
  openGraph={{
    title: page.title,
    description: page.description,
    url: global.siteUrl + "/" + page.slug.current,
    type: 'website',
    images: [
      {
        url:  "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/page/" + page.slug.current,
        width: 850,
        height: 650,
        alt: page.title
      }
     ]
  }}
/>
