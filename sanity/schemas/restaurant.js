import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Restaurant image',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Restaurant latitude',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Restaurant longitude',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Restaurant rating',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Please enter a value between 1 and 5')
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }]
    }),
  ]
});
