// mainImage.js
export default {
    name: 'externalReference',
    title: 'External Reference',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'link',
        type: 'url',
        title: 'URL'
      }
    ]
  }
