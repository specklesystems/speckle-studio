import {defineType} from 'sanity'

export default defineType({
  name: 'tutorial',
  type: 'document',
  title: 'Tutorials',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'webflowURL',
      type: 'url',
      title: 'Webflow URL',
      description: 'The link to the webflow post',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    }
  ]
})