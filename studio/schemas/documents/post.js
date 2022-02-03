import { DocumentIcon } from '@sanity/icons'
import { createSlugField, fields } from "sanity-pills"

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: DocumentIcon,
  groups: [

    {
      name: 'page',
      title: 'Page',
      default: true
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'body',
      title: 'Body',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'taxonomy',
      title: 'Taxonomy',
    },
  ],
  fields: fields({
    // a required string
    title: {
      description: 'Titles should be catchy, descriptive, and not too long',
      required: true,
      group: 'page'

    },
    // produces a prefixed URL like /blog/hello/ and validates
    // that the prefixes is included as expected
    scopedSlug: createSlugField({
      prefix: "blog",
      source: "title",
      group: 'page'

    }),
    publishedAt: {
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      initialValue: (new Date()).toISOString(),
      group: 'page'

    },
    image: {
      type: 'image',
      title: 'Main image',
      group: 'media'

    },
    author: {
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      group: 'page'

    },
    tags: {
      title: 'Tags',
      group: 'taxonomy',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    seo: {
      type: 'seo',
      group: 'seo'
    },
    excerpt: {
      type: 'string',
      group: 'body'
    },
    body: {
      type: 'blockContent',
      group: 'body'
    }

  }),


  preview: {
    select: {
      title: 'title',
      scopedSlug: 'scopedSlug',
      media: 'image'
    },
    prepare({ title = 'No title', scopedSlug, media }) {
      const path = `${scopedSlug.current}`

      return {
        title,
        media,
        subtitle: path
      }
    }
  }
}
