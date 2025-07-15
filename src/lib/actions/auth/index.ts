"use server";

import { createClient } from "@/lib/supabase/server";
import { ApiResponse, AppUser, LoginInput, RegisterInput } from "@/lib/types";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const signInWithCredentials = async (
  input: LoginInput,
): Promise<ApiResponse<AppUser>> => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Unfortunately, we cannot access your account at the moment. Please try again later",
    };
  }

  const supabaseUser = data.user;
  const metadata = supabaseUser.user_metadata;
  const user: AppUser = {
    id: supabaseUser.id,
    aud: supabaseUser.aud,
    email: supabaseUser.email,
    email_confirmed_at: supabaseUser.email_confirmed_at,
    last_sign_in_at: supabaseUser.last_sign_in_at,
    role: supabaseUser.role,
    first_name: metadata.first_name,
    last_name: metadata.last_name,
    display_name: metadata.display_name,
  };

  return {
    status: "success",
    message: "Login was successful. You will access your dashboard shortly",
    data: user,
  };
};

/*
 * Handles the process of registering a user
 * */
export const signUpWithCredentials = async (
  input: RegisterInput,
): Promise<ApiResponse<null>> => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        display_name: `${input.first_name} ${input.last_name}`,
        first_name: input.first_name,
        last_name: input.last_name,
      },
      emailRedirectTo: `${defaultUrl}/dashboard`,
    },
  });

  console.log({ error });
  if (error) {
    return {
      status: "error",
      message: "Unfortunately, we cannot register your account at the moment.",
    };
  }
  return {
    status: "success",
    message:
      "Registeration was successful. Please check your email for further instructions",
  };
};

/**
 * Handles the process of requesting password reset
 * */
