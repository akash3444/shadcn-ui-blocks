"use client";

import { SelectHTMLAttributes } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-sm mx-auto space-y-3 w-full"
      >
        <SelectWithForm<schemaType>
          name="country"
          title="Select country"
          options={COUNTRIES}
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
                id={name}
                className={cn(
                  "aria-invalid:border-destructive aria-invalid:ring-destructive w-full",
                  className
                )}
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
