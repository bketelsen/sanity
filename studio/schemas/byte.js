import { DocumentIcon } from '@sanity/icons'

export default {
  name: 'byte',
  type: 'document',
  title: 'Quick Byte',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Address of this post in the website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'No title', slug }) {
      const path = `/byte/${slug.current}/`
      return {
        title,
        subtitle: path
      }
    }
  }
}
