const fs = require("fs");

const http = require('http'),
    https = require('https');

const path = require('path');


const sanityClient = require('@sanity/client')
const sanClient = sanityClient({
    projectId: 'rfbt4ocs',
    dataset: 'production',
    apiVersion: '2022-02-14', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
})
const postOgBaseUrl = 'https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev'
const pageOgBaseUrl = 'https://og-sooty.vercel.app/api/open-graph-image?path=/brian.dev/page'

const blogQuery = `*[
    _type == "post" &&
    defined(scopedSlug.current) &&
    publishedAt < now()
  ] | order(publishedAt desc) {
    _id,
    title,
    'date': publishedAt,
    excerpt,
    'slug': scopedSlug.current,
    image,
    'author': author->{name, twitter, image},
    "numberOfCharacters": length(pt::text(body)),
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    'tags': tags[]->{taxonomy,scopedSlug}
  }`
  const pageQuery = `*[
    _type == "page" &&
    defined(slug.current)
  ] {
    _id,
    title,
    'slug': slug.current,
  }`

var Stream = require('stream').Transform;

// Download Image Helper Function
var downloadImageFromURL = (url, filename, callback) => {

    var client = http;
    if (url.toString().indexOf("https") === 0) {
        client = https;
    }

    client.request(url, function (response) {
        var data = new Stream();

        response.on('data', function (chunk) {
            data.push(chunk);
        });

        response.on('end', function () {
            fs.writeFileSync(filename, data.read());
        });
    }).end();
};

// Calling Function to Download
sanClient.fetch(blogQuery).then((posts) => {
    console.log('blog posts')
    posts.forEach((post) => {
        console.log(`${post._id} ${post.slug}`)
        const filePath = path.join("static", "images", "og", "blog", `${post._id}.png`)
        downloadImageFromURL(postOgBaseUrl + post.slug, filePath);

    })
})
sanClient.fetch(pageQuery).then((pages) => {
    console.log('pages')
    pages.forEach((page) => {
        console.log(`${page._id} ${page.slug}`)
        const filePath = path.join("static", "images", "og", "page", `${page._id}.png`)
        downloadImageFromURL(pageOgBaseUrl + page.slug, filePath);

    })
})