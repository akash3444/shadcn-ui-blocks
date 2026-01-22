"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { SelectHTMLAttributes } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const COUNTRIES: OptionType[] = [
  { id: "us", name: "United States" },
  { id: "uk", name: "United Kingdom" },
  { id: "ca", name: "Canada" },
  { id: "au", name: "Australia" },
  { id: "fr", name: "France" },
  { id: "de", name: "Germany" },
  { id: "jp", name: "Japan" },
  { id: "br", name: "Brazil" },
];

const schema = z.object({
  country: z.string().min(1, "Country is required"),
});

type schemaType = z.infer<typeof schema>;

export default function SelectWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: schemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="mx-auto w-full max-w-sm space-y-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <SelectWithForm<schemaType>
          name="country"
          options={COUNTRIES}
          title="Select country"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

type OptionType = {
  id: string;
  name: string;
};

type SelectWithFormProps<K> = {
  name: keyof K & string;
  title?: string;
  className?: string;
  options: OptionType[];
} & Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children" | "onValueChange" | "value" | "defaultValue" | "dir"
>;

export function SelectWithForm<K>({
  title,
  name,
  className,
  options,
  ...props
}: SelectWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
          <Select {...field} {...props} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                className={cn(
                  "w-full aria-invalid:border-destructive aria-invalid:ring-destructive",
                  className
                )}
                id={name}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {options.map((item) => (
                <SelectItem key={`${name}_${item.id}`} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
