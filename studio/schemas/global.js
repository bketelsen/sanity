export default {
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: "Site Name, used in browser tab, search results"
    },
    {
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      description: "Header Title, for top nav"
    },
    {
      title: 'Site URL',
      name: 'siteUrl',
      type: 'url'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
    },
  ],
}
