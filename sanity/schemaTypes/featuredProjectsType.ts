import {StarIcon} from '@sanity/icons/Star'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredProjectsType = defineType({
  name: 'featuredProjects',
  title: 'Featured Projects',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Featured Projects',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'project'}})],
      validation: (Rule) => Rule.max(5).unique(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      projects: 'projects',
    },
    prepare({title, projects}) {
      const count = (projects || []).length
      return {
        title: title || 'Featured Projects',
        subtitle: `${count} project${count === 1 ? '' : 's'} selected`,
      }
    },
  },
})
