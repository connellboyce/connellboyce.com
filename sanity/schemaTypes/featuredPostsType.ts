import {StarIcon} from '@sanity/icons/Star'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredPostsType = defineType({
  name: 'featuredPosts',
  title: 'Featured Posts',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Featured Posts',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'post'}})],
      validation: (Rule) => Rule.max(3).unique(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      posts: 'posts',
    },
    prepare({title, posts}) {
      const count = (posts || []).length
      return {
        title: title || 'Featured Posts',
        subtitle: `${count} post${count === 1 ? '' : 's'} selected`,
      }
    },
  },
})
