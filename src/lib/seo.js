export function coalesce(global, page, post) {
    console.log("global", global);
    console.log("page", page);
    console.log("post", post);
    let title = post?.title || page?.title || global?.defaultSeo?.metaTitle;
    let description = post?.excerpt || page?.seo?.metaDescription || global?.defaultSeo?.metaDescription;
    let type = 'website';
    if (post) {
        type = 'article';
    }
    let props = {

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
                url: "https://www.example.com/images/cover.jpg",
                width: 850,
                height: 650,
                alt: "Og Image Alt",
            },
        ],
    }

    props.title = title;
    props.description = description;
    props.nofollow = false;
    props.noindex = false;

    return props;

}
