export default {
  name: 'technology',
  title: 'Technology',
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
      name: 'iconName',
      title: 'Icon Name',
      type: 'string'
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'externalReferences',
      title: 'External References',
      type: 'array',
      of: [ { type: 'externalReference' } ],
    },
    {
      name: 'externalArticles',
      title: 'External Articles',
      type: 'array',
      of: [{ type: 'externalReference' } ],
    }
  ]
}