"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/registry/ui/button";
import { Checkbox } from "@/registry/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form";

interface CheckboxWithFormProps<K> {
  name: keyof K & string;
  title?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
}

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
        <FormItem className="flex w-full items-center gap-4">
          <FormControl>
            <Checkbox
              id={name}
              {...field}
              checked={field.value}
              className={className}
              disabled={disabled}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="flex flex-col gap-1.5">
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
        className="w-full space-y-4 px-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CheckboxWithForm<schemaType>
          description="This role has access to all the features of the application."
          name="isAdmin"
          title="Admin role"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
