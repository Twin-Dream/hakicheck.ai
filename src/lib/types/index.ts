import { z } from "zod";
import {
  ForgotPasswordSchema,
  LoginSchema,
  RegisterSchema,
  UpdatePasswordSchema,
} from "@/lib/validators/auth";

export type ApiStatus = "success" | "error";
export interface ApiResponse<T> {
  status: ApiStatus;
  message: string;
  data?: T;
}

export type AppUser = {
  id: string;
  aud: string;
  email?: string;
  email_confirmed_at?: string;
  last_sign_in_at?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
};

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type ForgetPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type UpdatePasswordInput = z.infer<typeof UpdatePasswordSchema>;
