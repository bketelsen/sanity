export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      description: '@twitter URL'
    },
    {
      name: 'twitch',
      title: 'Twitch',
      type: 'string',
      description: 'Twitch URL'
    },
    {
      name: 'linkedin',
      title: 'LinkedIN',
      type: 'string',
      description: 'LinkedIN'
    },
        {
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
      description: 'Youtube'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      description: 'Instagram'
    },
    {
      name: 'polywork',
      title: 'Polywork',
      type: 'string',
      description: 'Polywork'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'email address'
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'string',
      description: '@github'
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      description: '@facebook'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Author image',
      description: 'The highest resolution'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
