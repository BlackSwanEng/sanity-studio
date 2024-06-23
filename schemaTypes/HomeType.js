import {defineType, defineField} from 'sanity'

export const HomeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection',
    }),
    defineField({
      name: 'featuredProductsSection',
      title: 'Featured Products Section',
      type: 'featuredProductsSection',
    }),
    defineField({
      name: 'projectsCounter',
      title: 'Projects Counter',
      type: 'projectsCounter',
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'testimonialsSection',
    }),
    defineField({
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})

export const heroSection = defineField({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call-to-Action',
      type: 'string',
    }),
  ],
})

export const featuredProductsSection = defineField({
  name: 'featuredProductsSection',
  title: 'Featured Products Section',
  type: 'array',
  of: [
    defineField({
      name: 'product',
      title: 'Product',
      type: 'product',
    }),
  ],
})

export const product = defineField({
  name: 'product',
  title: 'Product',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})

export const projectsCounter = defineField({
  name: 'projectsCounter',
  title: 'Projects Counter',
  type: 'array',
  of: [
    defineField({
      name: 'counter',
      title: 'Counter',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'number',
          title: 'Number',
          type: 'string',
        }),
      ],
    }),
  ],
})

export const testimonialsSection = defineField({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'array',
  of: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        defineField({
          name: 'authorName',
          title: 'Author Name',
          type: 'string',
        }),
        defineField({
          name: 'authorImage',
          title: 'Author Image',
          type: 'image',
        }),
        defineField({
          name: 'testimonial',
          title: 'Testimonial',
          type: 'text',
        }),
      ],
    }),
  ],
})
