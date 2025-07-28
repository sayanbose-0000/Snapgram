import * as z from "zod";

const commentZodSchema = z.object({
  post: z
    .string({ error: "Post must be a string" })
    .min(1, { error: "Post must be provided" }),

  user: z
    .string({ error: "User must be a string" })
    .min(1, { error: "User must be provided" }),

  comment: z
    .string({ error: "Comment must be a string" })
    .min(1, { error: "Comment must be provided" }),

});

type CommentZodSchemaType = z.infer<typeof commentZodSchema>;

export { commentZodSchema };
export type { CommentZodSchemaType };