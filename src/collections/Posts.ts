import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      label: 'Title',
      required: true,
      type: 'text',
    },
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }) => (user.id),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Posts will not be public until this date',
      },
      defaultValue: () => (new Date()),
    },
  ],
  access: {
    read: () => true,
  },
  admin: {
    description: 'Post is a collection of chronogically ordered entries.',
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `http://localhost:3001/preview/posts/${doc.slug}?locale=${locale}`;
      }
      return null;
    },
    defaultColumns: [
      'title',
      'publishDate',
      'author',
    ],
    group: 'Blog',
  },
  versions: {
    drafts: true,
  },
}

export default Posts;