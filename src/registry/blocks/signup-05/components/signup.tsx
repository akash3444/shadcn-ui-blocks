"use client";

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
import { Logo } from "@/registry/blocks/signup-05/components/logo";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const SignUp = () => {
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
    <div className="flex h-screen items-center justify-center">
      <div className="grid h-full w-full p-4 lg:grid-cols-2">
        <div className="m-auto flex w-full max-w-xs flex-col items-center">
          <Logo className="h-9 w-9" />
          <p className="mt-4 font-semibold text-xl tracking-tight">
            Sign up for Shadcn UI Blocks
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Button
              className="h-10 w-10 rounded-full"
              size="icon"
              variant="outline"
            >
              <GithubIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              className="h-10 w-10 rounded-full"
              size="icon"
              variant="outline"
            >
              <InstagramIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              className="h-10 w-10 rounded-full"
              size="icon"
              variant="outline"
            >
              <TwitterIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              className="h-10 w-10 rounded-full"
              size="icon"
              variant="outline"
            >
              <FigmaIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              className="h-10 w-10 rounded-full"
              size="icon"
              variant="outline"
            >
              <TwitchIcon className="h-[18px]! w-[18px]!" />
            </Button>
          </div>

          <div className="my-7 flex w-full items-center justify-center overflow-hidden">
            <Separator />
            <span className="px-2 text-sm">OR</span>
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
                        className="w-full"
                        placeholder="Email"
                        type="email"
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
                        className="w-full"
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-4 w-full" type="submit">
                Continue with Email
              </Button>
            </form>
          </Form>

          <p className="mt-5 text-center text-sm">
            Already have an account?
            <Link className="ml-1 text-muted-foreground underline" href="#">
              Log in
            </Link>
          </p>
        </div>
        <div className="hidden rounded-lg border bg-muted lg:block" />
      </div>
    </div>
  );
};

export default SignUp;
