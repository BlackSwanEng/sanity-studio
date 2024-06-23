import {defineField, defineType} from "sanity";

export const ProjectType = defineType({
    name: "project",
    title: "Project",
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
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "projectType",
            title: "Project Type",
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
        defineField({
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        }),
        defineField({
            name: "containerSize",
            title: "Container Size",
            type: "string",
        }),
        defineField({
            name: "truckType",
            title: "Truck Type",
            type: "string",
            options: {
                list: [
                    { title: 'Pick Up Truck', value: 'pick up truck' },
                    { title: 'Truck', value: 'truck' },
                ],
                layout: 'dropdown',
            }
        }),
        defineField({
            name: "clientCompany",
            title: "Client Company",
            type: "string",
        }),
        defineField({
            name: "clientDeliveryDate",
            title: "Client Delivery Date",
            type: "date",
        }),
    ],
});


