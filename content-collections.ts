import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    author: z.string(),
  }),
  transform: async (document, context) => {
    const content = await compileMarkdown(context, document);
    const slug = document._meta.path;
    return {
      ...document,
      content,
      slug
    };
  },
});

export default defineConfig({
  collections: [posts],
});