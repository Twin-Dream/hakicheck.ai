"use client";

import React, { useTransition } from "react";
import { LoginInput } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import { signInWithCredentials } from "@/lib/actions/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignInForm = () => {
  const [loading, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<LoginInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const handleSubmit = (input: LoginInput) => {
    startTransition(async () => {
      const result = await signInWithCredentials(input);
      if (result.status == "error") {
        form.resetField("password");
      } else if (result.status == "success") {
        form.reset();
        router.push("/dashboard");
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Hakicheck.ai</CardTitle>
        <CardDescription>
          Fill in the details below to register for an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <Separator />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button loading={loading} type="submit" className="w-full">
              Sign in
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
