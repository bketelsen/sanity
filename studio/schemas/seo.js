export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: "meta title"
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      description: "meta description"
    },
    {
      name: 'shareImage',
      title: 'Share image',
      type: 'image',
      description: "optional OG Image"
    }
  ],
}
