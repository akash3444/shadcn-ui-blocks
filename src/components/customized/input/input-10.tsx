"use client";

import { InputHTMLAttributes } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormField,
  FormMessage,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type schemaType = z.infer<typeof schema>;

export default function InputWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "hello@example.com",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: schemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputWithForm<schemaType>
          name="email"
          title="Email"
          placeholder="Enter your email"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

type InputWithFormProps<K> = {
  name: keyof K & string;
  title?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithForm<K>({
  title,
  name,
  className,
  ...props
}: InputWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel htmlFor={`${name}-${title}`}>{title}</FormLabel>}
          <FormControl>
            <Input
              id={`${name}-${title}`}
              {...field}
              {...props}
              className={cn(
                "aria-invalid:border-destructive aria-invalid:ring-destructive",
                className
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
