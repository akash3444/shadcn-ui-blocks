import {
  BriefcaseIcon,
  MapPinIcon,
  MoreHorizontalIcon,
  PencilIcon,
  UserIcon,
} from "lucide-react";
import type { SVGProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function Profile() {
  return (
    <div className="min-h-dvh">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col p-6 py-10">
        <div className="mb-4 flex items-center gap-8 max-[24rem]:gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="size-28 border max-[24rem]:size-20 sm:size-40">
              <AvatarImage
                alt="User avatar"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback className="font-medium text-2xl">
                CN
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <span className="font-semibold text-lg sm:text-2xl">John Doe</span>
            <span className="text-muted-foreground">john.doe@example.com</span>
          </div>
        </div>

        <p className="mt-0.5 line-clamp-4 text-muted-foreground">
          I&apos;m a passionate software developer with over 5 years of
          experience building web applications. I love working with modern
          technologies and creating user-friendly interfaces that solve
          real-world problems.
        </p>

        <div className="mt-8 flex w-full items-center gap-2">
          <Button>Hire Me</Button>
          <Button size="icon" variant="secondary">
            <X className="size-4!" />
          </Button>
          <Button size="icon" variant="secondary">
            <DailyDev className="size-5.5!" />
          </Button>
          <Button size="icon" variant="secondary">
            <Bluesky />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="secondary">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Hashnode />
                Follow on Hashnode
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Peerlist />
                Follow on Peerlist
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Reddit />
                Follow on Reddit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-8 border-b">
        <Tabs className="mx-auto w-full max-w-3xl px-6" defaultValue="profile">
          <ScrollArea className="mask-r-from-95%">
            <TabsList
              className={cn(
                "rounded-none bg-transparent p-0",
                "*:rounded-none *:border-0 *:border-b-2 *:px-4 *:text-muted-foreground",
                "*:data-[state=active]:border-foreground *:data-[state=active]:border-b-2 *:data-[state=active]:bg-transparent",
                "*:data-[state=active]:text-foreground *:data-[state=active]:shadow-none"
              )}
            >
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="followings">Followings</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Tabs>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="space-y-8 py-8">
          <div>
            <div className="-ms-px flex items-center justify-between gap-2.5 border border-b-0 border-dashed bg-muted/50 px-4 py-3">
              <h2 className="flex items-center gap-2.5 font-medium text-lg">
                <UserIcon className="size-5 fill-foreground/8" />
                Personal Information
              </h2>

              <Button className="-me-1 size-8" size="icon" variant="ghost">
                <PencilIcon />
              </Button>
            </div>
            <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
              <UserInfo label="Full Name" value="Alex Johnson" />
              <UserInfo label="Email" value="alex.johnson@example.com" />
              <UserInfo label="Phone" value="+1 (555) 123-4567" />
              <UserInfo label="Date of Birth" value="March 15, 1992" />
            </div>
          </div>

          <div>
            <div className="-ms-px flex items-center justify-between gap-2.5 border border-b-0 border-dashed bg-muted/50 px-4 py-3">
              <h2 className="flex items-center gap-2.5 font-medium text-lg">
                <MapPinIcon className="size-5 fill-foreground/8" />
                Location
              </h2>

              <Button className="-me-1 size-8" size="icon" variant="ghost">
                <PencilIcon />
              </Button>
            </div>
            <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
              <UserInfo label="Country" value="United States" />
              <UserInfo label="State/Province" value="California" />
              <UserInfo label="City" value="San Francisco" />
              <UserInfo label="Postal Code" value="94102" />
            </div>
          </div>

          <div>
            <div className="-ms-px flex items-center justify-between gap-2.5 border border-b-0 border-dashed bg-muted/50 px-4 py-3">
              <h2 className="flex items-center gap-2.5 font-medium text-lg">
                <BriefcaseIcon className="size-5 fill-foreground/8" />
                Professional Details
              </h2>

              <Button className="-me-1 size-8" size="icon" variant="ghost">
                <PencilIcon />
              </Button>
            </div>
            <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
              <UserInfo label="Job Title" value="Senior Frontend Developer" />
              <UserInfo label="Company" value="TechCorp Inc." />
              <UserInfo label="Department" value="Engineering" />
              <UserInfo label="Years of Experience" value="6 years" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="mb-1 font-medium text-muted-foreground text-sm">
        {label}
      </h3>
      <p className="text-foreground">{value}</p>
    </div>
  );
}

const Bluesky = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 226">
    <path
      d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"
      fill="currentColor"
    />
  </svg>
);

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 1200 1227">
    <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
  </svg>
);

const DailyDev = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 40 40">
    <g fill="currentColor" fillRule="evenodd">
      <path
        d="m31.48 19.944-3.533-3.533 1.765-3.531 5.74 5.74a1.873 1.873 0 0 1 0 2.648l-7.065 7.064a1.873 1.873 0 0 1-2.648-2.648l5.74-5.74Z"
        opacity=".56"
      />
      <path d="M25.74 11.548a1.873 1.873 0 0 1 2.649 0l1.324 1.325-15.452 15.452a1.873 1.873 0 0 1-2.649 0l-1.324-1.324L25.74 11.548Zm-6.622 4.857-2.65 2.649-3.532-3.533-4.415 4.416 3.532 3.532-1.765 3.532-5.74-5.74a1.873 1.873 0 0 1 0-2.648l7.064-7.064a1.873 1.873 0 0 1 2.65 0l4.856 4.856Z" />
    </g>
  </svg>
);

const Hashnode = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 1000 1000">
    <path
      clipRule="evenodd"
      d="M68.692 334.16c-91.59 91.589-91.59 240.085 0 331.674L334.16 931.302c91.589 91.588 240.085 91.588 331.674-.001l265.468-265.467c91.588-91.59 91.588-240.085-.001-331.674L665.834 68.692c-91.59-91.59-240.085-91.59-331.674 0L68.692 334.16Zm431.302 330.06c90.694 0 164.216-73.522 164.216-164.216s-73.522-164.216-164.216-164.216-164.216 73.522-164.216 164.216S409.3 664.22 499.994 664.22Z"
      fill="#2563EB"
      fillRule="evenodd"
    />
  </svg>
);

const Peerlist = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 56 56">
    <path
      d="M28 0C6.22222 0 0 6.22222 0 28C0 49.7778 6.23778 56 28 56C49.7622 56 56 49.7778 56 28C56 6.22222 49.7622 0 28 0Z"
      fill="#00AA45"
    />
    <path
      clipRule="evenodd"
      d="M7.24755 7.24755C3.5875 10.9076 2 17.153 2 28C2 38.8461 3.59108 45.0918 7.25306 48.7521C10.9153 52.4127 17.1612 54 28 54C38.8388 54 45.0847 52.4127 48.7469 48.7521C52.4089 45.0918 54 38.8461 54 28C54 17.1539 52.4089 10.9082 48.7469 7.24787C45.0847 3.58733 38.8388 2 28 2C17.153 2 10.9076 3.5875 7.24755 7.24755ZM0 28C0 6.22222 6.22222 0 28 0C49.7622 0 56 6.22222 56 28C56 49.7778 49.7622 56 28 56C6.23778 56 0 49.7778 0 28Z"
      fill="#219653"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M27.0769 13H15V47H24.3846V39.8889H27.0769C34.7305 39.8889 41 33.9048 41 26.4444C41 18.984 34.7305 13 27.0769 13ZM24.3846 30.7778V22.1111H27.0769C29.6194 22.1111 31.6154 24.0864 31.6154 26.4444C31.6154 28.8024 29.6194 30.7778 27.0769 30.7778H24.3846Z"
      fill="#24292E"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M18 12H29.0769C36.2141 12 42 17.5716 42 24.4444C42 31.3173 36.2141 36.8889 29.0769 36.8889H25.3846V44H18V12ZM25.3846 29.7778H29.0769C32.1357 29.7778 34.6154 27.39 34.6154 24.4444C34.6154 21.4989 32.1357 19.1111 29.0769 19.1111H25.3846V29.7778Z"
      fill="white"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M17 11H29.0769C36.7305 11 43 16.984 43 24.4444C43 31.9048 36.7305 37.8889 29.0769 37.8889H26.3846V45H17V11ZM19 13V43H24.3846V35.8889H29.0769C35.6978 35.8889 41 30.7298 41 24.4444C41 18.1591 35.6978 13 29.0769 13H19ZM24.3846 18.1111H29.0769C32.6521 18.1111 35.6154 20.9114 35.6154 24.4444C35.6154 27.9775 32.6521 30.7778 29.0769 30.7778H24.3846V18.1111ZM26.3846 20.1111V28.7778H29.0769C31.6194 28.7778 33.6154 26.8024 33.6154 24.4444C33.6154 22.0864 31.6194 20.1111 29.0769 20.1111H26.3846Z"
      fill="#24292E"
      fillRule="evenodd"
    />
  </svg>
);

const Reddit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 216 216"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <radialGradient
        cx="169.75"
        cy="92.19"
        fx="169.75"
        fy="92.19"
        gradientTransform="matrix(1 0 0 .87 0 11.64)"
        gradientUnits="userSpaceOnUse"
        id="reddit__snoo-radial-gragient"
        r="50.98"
      >
        <stop offset="0" stopColor="#feffff" />
        <stop offset=".4" stopColor="#feffff" />
        <stop offset=".51" stopColor="#f9fcfc" />
        <stop offset=".62" stopColor="#edf3f5" />
        <stop offset=".7" stopColor="#dee9ec" />
        <stop offset=".72" stopColor="#d8e4e8" />
        <stop offset=".76" stopColor="#ccd8df" />
        <stop offset=".8" stopColor="#c8d5dd" />
        <stop offset=".83" stopColor="#ccd6de" />
        <stop offset=".85" stopColor="#d8dbe2" />
        <stop offset=".88" stopColor="#ede3e9" />
        <stop offset=".9" stopColor="#ffebef" />
      </radialGradient>
      <radialGradient
        cx="47.31"
        fx="47.31"
        id="reddit__snoo-radial-gragient-2"
        r="50.98"
        xlinkHref="#reddit__snoo-radial-gragient"
      />
      <radialGradient
        cx="109.61"
        cy="85.59"
        fx="109.61"
        fy="85.59"
        gradientTransform="matrix(1 0 0 .7 0 25.56)"
        id="reddit__snoo-radial-gragient-3"
        r="153.78"
        xlinkHref="#reddit__snoo-radial-gragient"
      />
      <radialGradient
        cx="-6.01"
        cy="64.68"
        fx="-6.01"
        fy="64.68"
        gradientTransform="matrix(1.07 0 0 1.55 81.08 27.26)"
        gradientUnits="userSpaceOnUse"
        id="reddit__snoo-radial-gragient-4"
        r="12.85"
      >
        <stop offset="0" stopColor="#f60" />
        <stop offset=".5" stopColor="#ff4500" />
        <stop offset=".7" stopColor="#fc4301" />
        <stop offset=".82" stopColor="#f43f07" />
        <stop offset=".92" stopColor="#e53812" />
        <stop offset="1" stopColor="#d4301f" />
      </radialGradient>
      <radialGradient
        cx="-73.55"
        cy="64.68"
        fx="-73.55"
        fy="64.68"
        gradientTransform="matrix(-1.07 0 0 1.55 62.87 27.26)"
        id="reddit__snoo-radial-gragient-5"
        r="12.85"
        xlinkHref="#reddit__snoo-radial-gragient-4"
      />
      <radialGradient
        cx="107.93"
        cy="166.96"
        fx="107.93"
        fy="166.96"
        gradientTransform="matrix(1 0 0 .66 0 57.4)"
        gradientUnits="userSpaceOnUse"
        id="reddit__snoo-radial-gragient-6"
        r="45.3"
      >
        <stop offset="0" stopColor="#172e35" />
        <stop offset=".29" stopColor="#0e1c21" />
        <stop offset=".73" stopColor="#030708" />
        <stop offset="1" />
      </radialGradient>
      <radialGradient
        cx="147.88"
        cy="32.94"
        fx="147.88"
        fy="32.94"
        gradientTransform="matrix(1 0 0 .98 0 .54)"
        id="reddit__snoo-radial-gragient-7"
        r="39.77"
      />
      <radialGradient
        cx="131.31"
        cy="73.08"
        fx="131.31"
        fy="73.08"
        gradientUnits="userSpaceOnUse"
        id="reddit__snoo-radial-gragient-8"
        r="32.6"
      >
        <stop offset=".48" stopColor="#7a9299" />
        <stop offset=".67" stopColor="#172e35" />
        <stop offset=".75" />
        <stop offset=".82" stopColor="#172e35" />
      </radialGradient>
    </defs>
    <path
      d="M108 0C48.35 0 0 48.35 0 108c0 29.82 12.09 56.82 31.63 76.37l-20.57 20.57C6.98 209.02 9.87 216 15.64 216H108c59.65 0 108-48.35 108-108S167.65 0 108 0Z"
      fill="#ff4500"
    />
    <circle
      cx="169.22"
      cy="106.98"
      fill="url(#reddit__snoo-radial-gragient)"
      r="25.22"
    />
    <circle
      cx="46.78"
      cy="106.98"
      fill="url(#reddit__snoo-radial-gragient-2)"
      r="25.22"
    />
    <ellipse
      cx="108.06"
      cy="128.64"
      fill="url(#reddit__snoo-radial-gragient-3)"
      rx="72"
      ry="54"
    />
    <path
      d="M86.78 123.48c-.42 9.08-6.49 12.38-13.56 12.38s-12.46-4.93-12.04-14.01c.42-9.08 6.49-15.02 13.56-15.02s12.46 7.58 12.04 16.66Z"
      fill="url(#reddit__snoo-radial-gragient-4)"
    />
    <path
      d="M129.35 123.48c.42 9.08 6.49 12.38 13.56 12.38s12.46-4.93 12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46 7.58-12.04 16.66Z"
      fill="url(#reddit__snoo-radial-gragient-5)"
    />
    <ellipse cx="79.63" cy="116.37" rx="2.8" ry="3.05" />
    <ellipse cx="146.21" cy="116.37" rx="2.8" ry="3.05" />
    <path
      d="M108.06 142.92c-8.76 0-17.16.43-24.92 1.22-1.33.13-2.17 1.51-1.65 2.74 4.35 10.39 14.61 17.69 26.57 17.69s22.23-7.3 26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"
      fill="url(#reddit__snoo-radial-gragient-6)"
    />
    <circle
      cx="147.49"
      cy="49.43"
      fill="url(#reddit__snoo-radial-gragient-7)"
      r="17.87"
    />
    <path
      d="M107.8 76.92c-2.14 0-3.87-.89-3.87-2.27 0-16.01 13.03-29.04 29.04-29.04 2.14 0 3.87 1.73 3.87 3.87s-1.73 3.87-3.87 3.87c-11.74 0-21.29 9.55-21.29 21.29 0 1.38-1.73 2.27-3.87 2.27Z"
      fill="url(#reddit__snoo-radial-gragient-8)"
    />
    <path
      d="M62.82 122.65c.39-8.56 6.08-14.16 12.69-14.16 6.26 0 11.1 6.39 11.28 14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14 6.05-13.56 15.2c-.42 9.15 4.97 13.83 12.04 13.83h.52c-6.44-.16-11.3-4.79-10.91-13.2Zm90.48 0c-.39-8.56-6.08-14.16-12.69-14.16-6.26 0-11.1 6.39-11.28 14.33-.17-8.88 5.13-15.99 12.05-15.99 7.07 0 13.14 6.05 13.56 15.2.42 9.15-4.97 13.83-12.04 13.83h-.52c6.44-.16 11.3-4.79 10.91-13.2Z"
      fill="#842123"
    />
  </svg>
);
