// mainImage.js
export default {
    name: 'banner',
    title: 'Announcement',
    type: 'object',
    fields: [
      {
        name: 'longTitle',
        type: 'string',
        title: 'Long Title'
      },
            {
        name: 'shortTitle',
        type: 'string',
        title: 'Short Title'

      },
      {
        name: 'link',
        type: 'string',
        title: 'Root Relative URL'
      }
    ]
  }
