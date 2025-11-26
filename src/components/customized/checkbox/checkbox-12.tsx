"use client";

import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/registry/ui/checkbox";
import {
  FormControl,
  FormItem,
  FormField,
  FormMessage,
  FormLabel,
  Form,
  FormDescription,
} from "@/registry/ui/form";
import { Button } from "@/registry/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

type CheckboxWithFormProps<K> = {
  name: keyof K & string;
  title?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
};

export function CheckboxWithForm<K>({
  title,
  description,
  name,
  disabled,
  className,
}: CheckboxWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full flex gap-4 items-center">
          <FormControl>
            <Checkbox
              id={name}
              {...field}
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              className={className}
            />
          </FormControl>
          <div className="flex flex-col gap-2">
            {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
            {description && <FormDescription>{description}</FormDescription>}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const schema = z.object({
  isAdmin: z.boolean(),
});

type schemaType = z.infer<typeof schema>;

export default function CheckboxWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      isAdmin: false,
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
        className="space-y-4 w-full px-4"
      >
        <CheckboxWithForm<schemaType>
          name="isAdmin"
          title="Admin role"
          description="This role has access to all the features of the application."
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
