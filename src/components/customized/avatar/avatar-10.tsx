import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function AvatarRing() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="ring-2 ring-ring ring-offset-2 ring-offset-background">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback className="rounded-none">ER</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-green-500 ring-offset-2 ring-offset-background">
        <AvatarImage alt="@evilrabbit" src="https://github.com/leerob.png" />
        <AvatarFallback className="rounded-md">LR</AvatarFallback>
      </Avatar>
      <div className="rounded-full bg-gradient-to-b from-red-500 to-blue-500 p-1">
        <Avatar className="ring-2 ring-background">
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
