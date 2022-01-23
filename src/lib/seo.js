export function coalesce(global, page, post) {
    let props = {}

    let title = post?.title || page?.seo.metaTitle || global?.defaultSeo?.metaTitle;
    let description = post?.excerpt || page?.seo?.metaDescription || global?.defaultSeo?.metaDescription;
    title = title + " | " + global?.siteName;
    let type = 'website';
    if (post) {

        type = 'article';
    }
    props.openGraph = {
        title: title,
        description: description,
        type: type,
        url: "https://www.example.com/articles/article-title",
        article: {
            publishedTime: "2020-08-03T17:31:37Z",
            modifiedTime: "2020-08-20T09:31:37Z",
            expirationTime: "2025-12-21T17:31:37Z",
            section: "Section II",
            authors: [
                "https://www.example.com/authors/@firstnameA-lastnameA",
                "https://www.example.com/authors/@firstnameB-lastnameB",
            ],
            tags: ["Tag A", "Tag B", "Tag C"],
        },
        images: [
            {
                url: "https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/blog/switchers",
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    }

    props.title = title;
    props.description = description;
    props.nofollow = false;
    props.noindex = false;

    return props;

}
