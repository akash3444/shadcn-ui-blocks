import { UserPlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-xl rounded-xl border bg-muted/70 p-0.75">
        <div className="shadow/5 flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-background px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UserPlusIcon className="size-5 shrink-0" />
            </div>
            <div>
              <p className="font-medium text-sm">Create your account</p>
              <p className="text-muted-foreground text-sm">
                Sign up to get started with our platform.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button className="text-muted-foreground" size="sm" variant="ghost">
              Dismiss
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
