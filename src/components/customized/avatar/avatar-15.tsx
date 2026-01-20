import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="border p-4 rounded-lg shadow-sm/3 flex items-start gap-10">
      <div className="flex gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1.5">
          <div className="font-medium tracking-tight leading-none flex items-center gap-1">
            John Doe
          </div>
          <span className="leading-none text-sm text-muted-foreground">
            Let's go to the park
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-1">
        <span className="text-xs text-muted-foreground">12:00 AM</span>
        <div className="px-1.5 h-5 flex items-center justify-center min-w-5 bg-primary text-primary-foreground rounded-full text-xs w-fit ms-auto">2</div>
      </div>
    </div>
  );
}
