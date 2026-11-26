import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar";
import { Orbit } from "@/registry/blocks/base/login-02/components/orbit";

export const BrandPanel = () => (
  <div className="@container sticky top-0 hidden h-svh flex-col overflow-hidden border-l bg-muted lg:flex">
    <div className="flex min-h-0 flex-1 items-center justify-center [container-type:size]">
      <Orbit />
    </div>
    <figure className="flex flex-col items-center gap-6 @2xl:px-12 px-8 @2xl:pb-12 pb-8">
      <blockquote className="max-w-136 text-balance text-center font-medium @2xl:text-3xl/9.5 @xl:text-2xl text-xl tracking-tight">
        “We stopped debating the login screen and went back to building the
        product.”
      </blockquote>
      <figcaption className="flex items-center gap-3 text-sm">
        <Avatar
          className="border-2 border-background ring-1 ring-foreground/14 after:hidden"
          size="lg"
        >
          <AvatarImage
            alt=""
            src="https://mockmind-api.uifaces.co/content/human/82.jpg"
          />
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">Ines Moreau</p>
          <p className="text-muted-foreground">Design lead, Fieldnote</p>
        </div>
      </figcaption>
    </figure>
  </div>
);
