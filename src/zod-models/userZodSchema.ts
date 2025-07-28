import * as z from "zod";

const userZodSchema = z.object({
  username: z
    .string({ error: "Username must be a string" })
    .min(1, { error: "Username must be provided" }),

  name: z
    .string({ error: "Name must be a string" })
    .min(1, { error: "Name must be provided" }),

  email: z
    .string({ error: "Email must be a string" })
    .min(1, { error: "Email must be provided" }),

  bio: z
    .string({ error: "Bio must be a string" })
    .min(1, { error: "Bio must be provided" }),

  dp: z
    .string({ error: "Dp must be a string" })
    .min(1, { error: "Dp must be provided" }),
});

type UserZodSchemaType = z.infer<typeof userZodSchema>;


export { userZodSchema };
export type { UserZodSchemaType };