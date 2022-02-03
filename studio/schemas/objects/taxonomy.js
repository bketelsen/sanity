export default {
    name: 'taxonomy',
    title: 'Taxonomy',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
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
