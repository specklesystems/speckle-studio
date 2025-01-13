import {defineType} from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Authors',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      options: {
        hotspot: true
      }
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Job Title'
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio'
    }
  ]
})
