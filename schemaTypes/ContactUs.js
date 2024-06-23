import { defineType, defineField } from "sanity";

export const ContactUsType = defineType({
    name: "contactUs",
    title: "Contact Us",
    type: "document",
    fields: [
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
    ],
});
