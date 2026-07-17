import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    venue: z.string().optional(),
    order: z.number().optional(),
    mainImage: z.string(),
    gallery: z
      .array(z.object({ image: z.string(), caption: z.string().optional() }))
      .optional(),
  }),
});

export const collections = { projects };
