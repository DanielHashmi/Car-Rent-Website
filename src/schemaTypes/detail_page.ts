import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detail_page',
    title: 'Detail_Page',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text',
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
            name: 'capacity',
            title: 'Capacity',
            type: 'string',
        }),
        defineField({
            name: 'steering',
            title: 'Steering',
            type: 'string',
        }),
        defineField({
            name: 'gasoline',
            title: 'Gasoline',
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
            name: 'reviews',
            title: 'Reviews',
            type: 'number',
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
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image', // maybe i need image array or similar for 3 images because i need 3 images for the detail page
            options: {
                hotspot: true,
            },
        }),
    ],
})