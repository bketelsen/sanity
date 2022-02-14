<script>
	export let page;
	export let global;
	import SvelteSeo from 'svelte-seo';
	let slug = page.slug.current;
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
				url: global.siteUrl + '/images/og/page/' + page._id + '.png',
				width: 850,
				height: 650,
				alt: page.title
			}
		]
	}}
/>
