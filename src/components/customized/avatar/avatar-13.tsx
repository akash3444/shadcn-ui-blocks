import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

type AvatarProps = React.ComponentProps<typeof Avatar>;

interface AvatarGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactElement<AvatarProps>[];
  max?: number;
}

const AvatarGroup = ({
  children,
  max,
  className,
  ...props
}: AvatarGroupProps) => {
  const totalAvatars = React.Children.count(children);
  const displayedAvatars = React.Children.toArray(children)
    .slice(0, max)
    .reverse();
  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;

  return (
    <div
      className={cn("flex flex-row-reverse items-center", className)}
      {...props}
    >
      {remainingAvatars > 0 && (
        <Avatar className="relative -ml-2 ring-2 ring-background hover:z-10">
          <AvatarFallback className="bg-muted-foreground text-white">
            +{remainingAvatars}
          </AvatarFallback>
        </Avatar>
      )}
      {displayedAvatars.map((avatar, index) => {
        if (!React.isValidElement(avatar)) return null;

        return (
          <div className="relative -ml-2 hover:z-10" key={index}>
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {
              className: "ring-2 ring-background",
            })}
          </div>
        );
      })}
    </div>
  );
};

export default function AvatarGroupMaxAvatarDemo() {
  return (
    <AvatarGroup className="flex items-center" max={3}>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback className="bg-indigo-500 text-white">CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-green-600 text-white">CN</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-indigo-500 text-white">VK</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 cursor-pointer first:ml-0">
        <AvatarFallback className="bg-orange-500 text-white">RS</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
