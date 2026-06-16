import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(), // short text / excerpt for the feed
      image: image().optional(), // optimized via astro:assets
      imageAlt: z.string().default(""),
      gallery: z.array(image()).optional(), // extra photos, optimized via astro:assets
    }),
});

export const collections = { blog };
