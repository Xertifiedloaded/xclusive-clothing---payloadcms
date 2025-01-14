import type { CollectionConfig } from 'payload';
export const HomePage: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'pageType',
      type: 'select',
      options: ['landing', 'about', 'contact', 'policy', 'custom'],
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        // Hero Section
        {
          slug: 'hero',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'subheading',
              type: 'text',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'cta',
              type: 'group',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                },
                {
                  name: 'link',
                  type: 'text',
                },
              ],
            },
          ],
        },
        // Featured Products
        {
          slug: 'featuredProducts',
          fields: [
            {
              name: 'heading',
              type: 'text',
            },
            {
              name: 'products',
              type: 'relationship',
              relationTo: 'products',
              hasMany: true,
            },
          ],
        },
        // Content Block
        {
          slug: 'content',
          fields: [
            {
              name: 'content',
              type: 'richText',
            },
          ],
        },
        // Categories Showcase
        {
          slug: 'categoriesShowcase',
          fields: [
            {
              name: 'categories',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
    },
  ],
};

// Navigation collection
export const Navigation = {
  slug: 'navigation',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'select',
      options: ['header', 'footer'],
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'subItems',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'link',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
