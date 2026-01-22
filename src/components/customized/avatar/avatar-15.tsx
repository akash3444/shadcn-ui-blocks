import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-start gap-10 rounded-lg border p-4 shadow-sm/3">
      <div className="flex gap-3">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1 font-medium leading-none tracking-tight">
            John Doe
          </div>
          <span className="text-muted-foreground text-sm leading-none">
            Let's go to the park
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-1">
        <span className="text-muted-foreground text-xs">12:00 AM</span>
        <div className="ms-auto flex h-5 w-fit min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-primary-foreground text-xs">
          2
        </div>
      </div>
    </div>
  );
}
