import { DocumentIcon } from '@sanity/icons'
import { createSlugField, fields } from "sanity-pills"

export default {
  name: 'author',
  title: 'Author',
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
      name: 'social',
      title: 'Social',
    },
    {
      name: 'bio',
      title: 'Bio',
    },
  ],
  fields: fields({
    // a required string
    name: {
      required: true,
      group: 'page'

    },
    // produces a prefixed URL like /blog/hello/ and validates
    // that the prefixes is included as expected
    scopedSlug: createSlugField({
      prefix: "authors",
      source: "name",
    }),


    image: {
      type: 'image',
      title: 'Main image',
      group: 'media'

    },
    bio: {
      title: 'Bio',
      type: 'blockContent',
    },
    twitter: {
      description: '@twitter URL',
      group: 'social'
    },
    twitch: {
      description: '@twitch URL',
      group: 'social'
    },
    linkedin: {
      description: 'LinkedIn',
      group: 'social'
    },
    youtube: {
      description: 'Youtube',
      group: 'social'
    },
    instagram: {
      description: 'Instagram',
      group: 'social'
    },
    polywork: {
      description: 'Polywork',
      group: 'social'
    },
    email: {
      description: 'email address',
      group: 'social'
    },
    github: {
      description: '@github',
      group: 'social'
    },
      facebook: {
        description: '@facebook',
        group: 'social'
    }
  }),

  preview: {
    select: {
      title: 'name',
      scopedSlug: 'scopedSlug',
      media: 'image'
    },
    prepare({ title = 'No name', scopedSlug, media }) {
      const path = `${scopedSlug.current}`

      return {
        title,
        media,
        subtitle: path
      }
    }
  }
}
