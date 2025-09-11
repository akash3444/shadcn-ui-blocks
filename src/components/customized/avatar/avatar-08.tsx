import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarShapeDemo() {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none bg-indigo-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-lg bg-indigo-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-full">
          <AvatarFallback className="rounded-full bg-indigo-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none bg-indigo-500/25 text-indigo-500">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-lg bg-indigo-500/25 text-indigo-500">
            A
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-full">
          <AvatarFallback className="rounded-full bg-indigo-500/25 text-indigo-500">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
