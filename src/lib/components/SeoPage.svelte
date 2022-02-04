<script>
	export let page;
	export let global;
	import SvelteSeo from 'svelte-seo';
	let slug = page.slug.current;
	console.log("slug:", slug)
	let title = page.seo?.title || page.title;
	title = title + ' | ' + global.siteName;
</script>

<SvelteSeo
	{title}
	description={page.seo?.metaDescription || page.description}
	openGraph={{
		title: page.seo?.metaTitle || page.title,
		description: page.seo?.metaDescription || page.herotext,
		url: global.siteUrl + slug,
		type: 'website',
		images: [
			{
				url: 'https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/page' + page.slug.current,
				width: 850,
				height: 650,
				alt: page.title
			}
		]
	}}
/>
