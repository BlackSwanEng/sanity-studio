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
            type: "reference",
            to: [{ type: "category" }],
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
            type: "reference",
            to: [{ type: "truckType" }],
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


export const TruckType = defineType({
    name: "truckType",
    title: "Truck Type",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
    ],
});

