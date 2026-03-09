"use client";

import { Copy, Search, UserPlusIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function InviteMember() {
  return (
    <Dialog open>
      <DialogContent className="max-w-sm! pb-2">
        <DialogHeader>
          <DialogTitle>Invite Members</DialogTitle>
          <DialogDescription>Invite members to your team.</DialogDescription>
        </DialogHeader>

        <div>
          <InputGroup>
            <InputGroupInput placeholder="Search for a member..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <ScrollArea className="mt-2 h-72">
            {people.map((person) => (
              <Item className="px-0" key={person.username}>
                <ItemMedia className="my-auto">
                  <Avatar className="size-9">
                    <AvatarImage className="grayscale" src={person.avatar} />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription>{person.email}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="secondary"
                      >
                        <UserPlusIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Send invite</TooltipContent>
                  </Tooltip>
                </ItemActions>
              </Item>
            ))}
          </ScrollArea>
        </div>

        <div className="-mx-4 rounded bg-muted px-5 py-4">
          <p className="font-medium text-sm">Copy link and share with others</p>
          <InputGroup className="mt-2 bg-background">
            <InputGroupInput
              placeholder="https://pro.shadcnui-blocks.com/invite"
              readOnly
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton aria-label="Copy" size="icon-xs" title="Copy">
                <Copy />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
  {
    username: "vercel",
    avatar: "https://github.com/vercel.png",
    email: "vercel@vercel.com",
  },
  {
    username: "rauchg",
    avatar: "https://github.com/rauchg.png",
    email: "rauchg@vercel.com",
  },
  {
    username: "sindresorhus",
    avatar: "https://github.com/sindresorhus.png",
    email: "sindresorhus@vercel.com",
  },
  {
    username: "yyx990803",
    avatar: "https://github.com/yyx990803.png",
    email: "yyx990803@vercel.com",
  },
  {
    username: "gaearon",
    avatar: "https://github.com/gaearon.png",
    email: "gaearon@vercel.com",
  },
  {
    username: "acdlite",
    avatar: "https://github.com/acdlite.png",
    email: "acdlite@vercel.com",
  },
  {
    username: "sebmarkbage",
    avatar: "https://github.com/sebmarkbage.png",
    email: "sebmarkbage@vercel.com",
  },
  {
    username: "timlrx",
    avatar: "https://github.com/timlrx.png",
    email: "timlrx@vercel.com",
  },
  {
    username: "leerob",
    avatar: "https://github.com/leerob.png",
    email: "leerob@vercel.com",
  },
  {
    username: "t3dotgg",
    avatar: "https://github.com/t3dotgg.png",
    email: "t3dotgg@vercel.com",
  },
  {
    username: "withastro",
    avatar: "https://github.com/withastro.png",
    email: "withastro@vercel.com",
  },
  {
    username: "prisma",
    avatar: "https://github.com/prisma.png",
    email: "prisma@vercel.com",
  },
  {
    username: "tailwindlabs",
    avatar: "https://github.com/tailwindlabs.png",
    email: "tailwindlabs@vercel.com",
  },
  {
    username: "adamwathan",
    avatar: "https://github.com/adamwathan.png",
    email: "adamwathan@vercel.com",
  },
  {
    username: "steveukx",
    avatar: "https://github.com/steveukx.png",
    email: "steveukx@vercel.com",
  },
  {
    username: "antfu",
    avatar: "https://github.com/antfu.png",
    email: "antfu@vercel.com",
  },
  {
    username: "chakra-ui",
    avatar: "https://github.com/chakra-ui.png",
    email: "chakra-ui@vercel.com",
  },
  {
    username: "mui",
    avatar: "https://github.com/mui.png",
    email: "mui@vercel.com",
  },
  {
    username: "pmndrs",
    avatar: "https://github.com/pmndrs.png",
    email: "pmndrs@vercel.com",
  },
  {
    username: "egoist",
    avatar: "https://github.com/egoist.png",
    email: "egoist@vercel.com",
  },
  {
    username: "mattpocock",
    avatar: "https://github.com/mattpocock.png",
    email: "mattpocock@vercel.com",
  },
  {
    username: "bradtraversy",
    avatar: "https://github.com/bradtraversy.png",
    email: "bradtraversy@vercel.com",
  },
  {
    username: "kentcdodds",
    avatar: "https://github.com/kentcdodds.png",
    email: "kentcdodds@vercel.com",
  },
  {
    username: "jaredpalmer",
    avatar: "https://github.com/jaredpalmer.png",
    email: "jaredpalmer@vercel.com",
  },
  {
    username: "bholmesdev",
    avatar: "https://github.com/bholmesdev.png",
    email: "bholmesdev@vercel.com",
  },
  {
    username: "joshwcomeau",
    avatar: "https://github.com/joshwcomeau.png",
    email: "joshwcomeau@vercel.com",
  },
  {
    username: "uidotdev",
    avatar: "https://github.com/uidotdev.png",
    email: "uidotdev@vercel.com",
  },
  {
    username: "theprimeagen",
    avatar: "https://github.com/theprimeagen.png",
    email: "theprimeagen@vercel.com",
  },
  {
    username: "fireship-io",
    avatar: "https://github.com/fireship-io.png",
    email: "fireship@vercel.com",
  },
  {
    username: "clerkinc",
    avatar: "https://github.com/clerkinc.png",
    email: "clerkinc@vercel.com",
  },
  {
    username: "supabase",
    avatar: "https://github.com/supabase.png",
    email: "supabase@vercel.com",
  },
  {
    username: "planetscale",
    avatar: "https://github.com/planetscale.png",
    email: "planetscale@vercel.com",
  },
  {
    username: "nextauthjs",
    avatar: "https://github.com/nextauthjs.png",
    email: "nextauthjs@vercel.com",
  },
  {
    username: "openai",
    avatar: "https://github.com/openai.png",
    email: "openai@vercel.com",
  },
  {
    username: "nestjs",
    avatar: "https://github.com/nestjs.png",
    email: "nestjs@vercel.com",
  },
  {
    username: "reduxjs",
    avatar: "https://github.com/reduxjs.png",
    email: "reduxjs@vercel.com",
  },
  {
    username: "remix-run",
    avatar: "https://github.com/remix-run.png",
    email: "remix@vercel.com",
  },
  {
    username: "denoland",
    avatar: "https://github.com/denoland.png",
    email: "denoland@vercel.com",
  },
  {
    username: "unocss",
    avatar: "https://github.com/unocss.png",
    email: "unocss@vercel.com",
  },
  {
    username: "vitejs",
    avatar: "https://github.com/vitejs.png",
    email: "vitejs@vercel.com",
  },
  {
    username: "graphql",
    avatar: "https://github.com/graphql.png",
    email: "graphql@vercel.com",
  },
  {
    username: "chakra-ui-typography",
    avatar: "https://github.com/chakra-ui-typography.png",
    email: "chakra-typography@vercel.com",
  },
  {
    username: "radix-ui",
    avatar: "https://github.com/radix-ui.png",
    email: "radix-ui@vercel.com",
  },
  {
    username: "vercel-labs",
    avatar: "https://github.com/vercel-labs.png",
    email: "vercel-labs@vercel.com",
  },
  {
    username: "motion-canvas",
    avatar: "https://github.com/motion-canvas.png",
    email: "motion-canvas@vercel.com",
  },
  {
    username: "lucide-icons",
    avatar: "https://github.com/lucide-icons.png",
    email: "lucide@vercel.com",
  },
  {
    username: "calcom",
    avatar: "https://github.com/calcom.png",
    email: "calcom@vercel.com",
  },
];
