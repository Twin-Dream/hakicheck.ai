import { z } from "zod";

export const RegisterSchema = z
  .object({
    first_name: z
      .string("Please enter your first name")
      .min(2, "First name is invalid"),
    last_name: z
      .string("Please enter your last name")
      .min(2, "Last name is invalid"),
    email: z.email({ error: "Please enter a valid email address" }),
    password: z
      .string("Please enter your password")
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string("Please confirm your password"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });

export const LoginSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),
  password: z
    .string("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
});

export const ForgotPasswordSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),
});

export const UpdatePasswordSchema = z
  .object({
    password: z
      .string("Please enter your password")
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string("Please confirm your password"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });
