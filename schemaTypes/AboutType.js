import { defineField, defineType } from "sanity";

export const AboutType = defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        defineField({
            name: "businessDescription",
            title: "Business Description",
            type: "text",
        }),
        defineField({
            name: "projectsCompleted",
            title: "Projects Completed",
            type: "array",
            of: [
                defineField({
                    name: "project",
                    title: "Project",
                    type: "project",
                    to: [{type: "project"}]
                }),
            ],
        }),
        defineField({
            name: "mission",
            title: "Mission",
            type: "text",
        }),
        defineField({
            name: "vision",
            title: "Vision",
            type: "text",
        }),
    ],
});
