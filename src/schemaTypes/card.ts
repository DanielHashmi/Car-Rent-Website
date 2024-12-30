import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'current_price',
            title: 'current_price',
            type: 'string',
        }),
        defineField({
            name: 'old_price',
            title: 'old_price',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
              },
        }),
        defineField({
            name: 'heart',
            title: 'Heart',
            type: 'boolean',
        }),
        defineField({
            name: 'car_type',
            title: 'car_type',
            type: 'string',
        }),
        defineField({
            name: 'icons',
            title: 'Icons',
            type: 'boolean',
        }),
        defineField({
            name: 'card_type',
            title: 'card_type',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
    ],
})