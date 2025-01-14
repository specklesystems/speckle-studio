import {defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  type: 'document',
  title: 'Blog posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'Webflow URL',
      type: 'url',
      title: 'Webflow URL',
      description: 'The link to the webflow post',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'reference', to: {type: 'blogCategory'}}]
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: {type: 'author'}
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              {title: 'Javascript', value: 'javascript'},
              {title: 'HTML', value: 'html'},
              {title: 'TypeScript', value: 'typescript'},
            ],
            withFilename: true,
          }
        },
        {
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube URL'
            }
          ]
        },
        {
          name: 'video',
          type: 'file',
          title: 'Video',
          options: {
            accept: 'video/*'
          }
        },
        {
          name: 'audio',
          type: 'file',
          title: 'Audio',
          options: {
            accept: 'audio/*'
          }
        },
      ]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
  ]
})