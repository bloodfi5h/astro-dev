import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    page_header: z
      .object({
        badge: z.string(),
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),
    read_more_blogs: z
      .object({
        title: z.string(),
      })
      .optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional()
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Case study collection schema
const caseStudyCollection = defineCollection({
  schema: z.object({
    badge: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    hero: z
      .object({
        badge: z.string(),
        title: z.string(),
        subtitle: z.string().optional(),
      })
      .optional(),
    button1: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    button2: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  case: caseStudyCollection,
  authors: authorsCollection,
  pages: pagesCollection,
};
