import {
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/registry/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/registry/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item";

export default function CardPost() {
  return (
    <Card className="w-full max-w-xs gap-0 py-0 shadow-none">
      <CardHeader className="-mr-1 flex flex-row items-center justify-between py-2.5">
        <Item className="w-full gap-2.5 p-0">
          <ItemMedia>
            <Image
              alt=""
              className="h-8 w-8 rounded-full bg-secondary object-contain"
              height={32}
              src="https://github.com/shadcn.png"
              width={32}
            />
          </ItemMedia>
          <ItemContent className="gap-0">
            <ItemTitle>shadcn</ItemTitle>
            <ItemDescription className="text-xs">@shadcn</ItemDescription>
          </ItemContent>
          <ItemActions className="-me-1">
            <Button size="icon" variant="ghost">
              <MoreHorizontalIcon />
            </Button>
          </ItemActions>
        </Item>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-video border-y bg-muted" />
        <div className="px-6 py-5">
          <h2 className="font-semibold">Exploring New Horizons</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            Had an amazing time discovering hidden gems! 🌄 Can&apos;t wait to
            share more from this journey.{" "}
            <span className="text-blue-500">#Wanderlust</span>{" "}
            <span className="text-blue-500">#NatureLovers</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex border-t px-2 py-2! pb-0">
        <Button className="shrink-0 grow text-muted-foreground" variant="ghost">
          <HeartIcon /> <span className="hidden sm:inline">Like</span>
        </Button>
        <Button className="shrink-0 grow text-muted-foreground" variant="ghost">
          <MessageCircleIcon />
          <span className="hidden sm:inline">Comment</span>
        </Button>
        <Button className="shrink-0 grow text-muted-foreground" variant="ghost">
          <ShareIcon /> <span className="hidden sm:inline">Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
