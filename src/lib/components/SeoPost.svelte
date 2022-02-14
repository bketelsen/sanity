<script>
	export let post;
	export let global;
	import SvelteSeo from 'svelte-seo';
	let tags = [];
	let title = post.seo?.title || post.title;
	title = title + ' | ' + global.siteName;
	post.tags.forEach(flattenTags);
	function flattenTags(value, index, array) {
		tags.push(value.title);
	}
</script>

<SvelteSeo
	{title}
	description={post.seo?.metaDescription || post.excerpt}
	openGraph={{
		title: post.seo?.metaTitle || post.title,
		description: post.seo?.metaDescription || post.excerpt,
		type: 'article',
		url: global.siteUrl + post.scopedSlug.current,
		article: {
			publishedTime: post.publishedAt,
			modifiedTime: post.updatedAt,
			expirationTime: '2025-12-21T17:31:37Z',
			section: post.tags[0].title,
			authors: ['Brian Ketelsen'],
			tags: tags
		},
		images: [
			{
				url: global.siteUrl + '/images/og/blog/' + post._id + '.png',
				width: 1200,
				height: 630,
				alt: post.title
			}
		]
	}}
	twitter={{
		site: '@bketelsen',
		title: post.seo?.metaTitle || post.title,
		description: post.seo?.metaDescription || post.excerpt,
		image:
			'https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev' + post.scopedSlug.current,
		imageAlt: post.title
	}}
	jsonLd={{
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': global.siteUrl + post.scopedSlug.current
		},
		headline: post.seo?.metaTitle || post.title,
		image: [
			'https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev' + post.scopedSlug.current
		],
		datePublished: post.publishedAt,
		dateModified: post.updatedAt,
		author: {
			'@type': 'Person',
			name: 'Brian Ketelsen'
		}
	}}
/>
