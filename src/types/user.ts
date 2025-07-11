import z from "zod/v4";

export const userSchema = z.object({
  id: z.string(),
  username: z.string().trim().min(2, "Username is required"),
  email: z.email("Enter a valid email"),
});

export const userFormSchema = z.object({
  username: z.string().trim().min(2, "Username is required"),
  email: z.email("Enter a valid email"),
});

export type User = z.infer<typeof userSchema>;
export type UserForm = z.infer<typeof userFormSchema>;
