import { DocumentIcon } from '@sanity/icons'
import { createSlugField, fields } from "sanity-pills"

export default {
  name: 'byte',
  type: 'document',
  title: 'Quick Byte',
  icon: DocumentIcon,
  fields: fields({
    // a required string
    title: {
      description: 'Titles should be catchy, descriptive, and not too long',
      required: true
    },
    // produces a prefixed URL like /blog/hello/ and validates
    // that the prefixes is included as expected
    scopedSlug: createSlugField({
      prefix: "bytes",
      source: "title",
    }),
    publishedAt:  {
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      initialValue: (new Date()).toISOString()
    },
    href: {
      title: 'Link',
      type: 'url'
    },
    description: {},
    tags: {
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },

  }),


  preview: {
    select: {
      title: 'title',
      scopedSlug: 'scopedSlug'
    },
    prepare({ title = 'No title', scopedSlug }) {
      const path = `${scopedSlug.current}`
      return {
        title,
        subtitle: path
      }
    }
  }
}
