import * as z from "zod";

const replyZodSchema = z.object({
  comment: z
    .string({ error: "Comment must be a string" })
    .min(1, { error: "Comment must be provided" }),

  user: z
    .string({ error: "User must be a string" })
    .min(1, { error: "User must be provided" }),

  reply: z
    .string({ error: "Reply must be a string" })
    .min(1, { error: "Reply must be provided" }),
});

type ReplyZodSchemaType = z.infer<typeof replyZodSchema>;

export { replyZodSchema };
export type { ReplyZodSchemaType };