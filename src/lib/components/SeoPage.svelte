<script>
    export let page;
    export let global;
    console.log(page)
    import SvelteSeo from "svelte-seo";
    let slug = page.slug.current === "home" ? "/" : page.slug.current;
    let title = page.seo?.title || page.title;
    title = title + " | " + global.siteName;


</script>

<SvelteSeo
    title={title}
    description= {page.seo?.metaDescription || page.description}
  openGraph={{
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.herotext,
    url: global.siteUrl +  slug,
    type: 'website',
    images: [
      {
        url:  "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev" + page.slug.current,
        width: 850,
        height: 650,
        alt: page.title
      }
     ]
  }}
/>
