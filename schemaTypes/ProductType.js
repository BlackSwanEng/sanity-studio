import { defineField, defineType } from "sanity";

export const ProductType = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    type: "image",
                }
            ],
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: 'Container', value: 'container' },
                    { title: 'Car', value: 'car' },
                    { title: 'Truck', value: 'truck' },
                ],
                layout: 'dropdown',
            }
        }),
    ],
});

