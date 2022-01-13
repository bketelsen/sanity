export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'SVG Icon',
      type: 'text',
      validation: Rule => Rule.required().min(2),
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'number',
    },
    {
      name: 'externalReferences',
      title: 'External References',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'externalReference' } }],
    },
    {
      name: 'externalArticles',
      title: 'External Articles',
      type: 'array',
      of: [ { type: 'externalReference' }],
    },
  ]
}
