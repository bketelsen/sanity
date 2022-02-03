import { DocumentIcon } from '@sanity/icons'
import { createSlugField, fields } from "sanity-pills"

export default {
  name: 'tag',
  title: 'Tag',
   icon: DocumentIcon,

  type: 'document',
  fields: fields({
   // produces a prefixed URL like /blog/hello/ and validates
    // that the prefixes is included as expected
    scopedSlug: createSlugField({
      prefix: "tag",
      source: "taxonomy.title",
    }),
    taxonomy: {
      type: 'taxonomy'
    }
  }),
  preview: {
    select: {
      title: 'taxonomy.title',
      scopedSlug: 'scopedSlug'

    },
    prepare({ title = 'No name', scopedSlug }) {
      const path = `${scopedSlug.current}`

      return {
        title,

        subtitle: path
      }
    }
  }
}
