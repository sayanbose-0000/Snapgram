import * as z from "zod";

const postsZodSchema = z.object({
  author: z
    .string({ error: "Author must be a string" })
    .min(1, { error: "Author must be provided" }),

  imageUrl: z
    .string({ error: "Image must be a string" })
    .min(1, { error: "Image must be provided" }),

  caption: z
    .string({ error: "Caption must be a string" })
    .min(1, { error: "Caption must be provided" }),
});

type PostsZodSchemaType = z.infer<typeof postsZodSchema>;

export { postsZodSchema };
export type { PostsZodSchemaType };
