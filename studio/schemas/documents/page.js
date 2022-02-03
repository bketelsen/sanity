import { DocumentIcon } from '@sanity/icons'
import { createSlugField, fields } from "sanity-pills"
export default {
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
  type: 'document',
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
   slug: createSlugField({ source: "title" }),
    subtitle:  {
      group: 'page'

    },
    herotext: {
      title: 'Hero Text',
      group: 'page'

    },
    image: {
      type: 'image',
      title: 'Main image',
      group: 'media'

    },

     seo: {
      type: 'seo',
      group: 'seo'
    },
    body: {
      type: 'blockContent',
      group: 'body'
    }

  }),

  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image'
    },
    prepare({ title = 'No title', slug, media }) {
      const path = `${slug.current}`

      return {
        title,
        media,
        subtitle: path
      }
    }
  }
}

