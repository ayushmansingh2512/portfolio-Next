import { defineType } from "sanity";

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4, // Optional: provides a larger input area in Sanity Studio
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})