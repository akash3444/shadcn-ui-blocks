import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarColorDemo() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-slate-500 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500 text-white">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-rose-500 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-cyan-500 text-white">C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-green-500 text-white">C</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-slate-500/25 text-slate-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-rose-500/25 text-rose-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-cyan-500/25 text-cyan-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-green-500/25 text-green-500">
            C
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
