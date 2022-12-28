import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Dish Image',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Dish price',
      type: 'number',
    }),
  ]
});
