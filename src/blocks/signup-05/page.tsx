"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FigmaIcon,
  GithubIcon,
  InstagramIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const SignUp05Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2 p-4">
        <div className="max-w-xs m-auto w-full flex flex-col items-center">
          <Logo className="h-9 w-9" />
          <p className="mt-4 text-xl font-semibold tracking-tight">
            Sign up for Shadcn UI Blocks
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <GithubIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <InstagramIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <TwitterIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <FigmaIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <TwitchIcon className="h-[18px]! w-[18px]!" />
            </Button>
          </div>

          <div className="my-7 w-full flex items-center justify-center overflow-hidden">
            <Separator />
            <span className="text-sm px-2">OR</span>
            <Separator />
          </div>

          <Form {...form}>
            <form
              className="w-full space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full"
                        {...field}
                      />
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
                      <Input
                        type="password"
                        placeholder="Password"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 w-full">
                Continue with Email
              </Button>
            </form>
          </Form>

          <p className="mt-5 text-sm text-center">
            Already have an account?
            <Link href="#" className="ml-1 underline text-muted-foreground">
              Log in
            </Link>
          </p>
        </div>
        <div className="bg-muted hidden lg:block rounded-lg border" />
      </div>
    </div>
  );
};

export default SignUp05Page;
