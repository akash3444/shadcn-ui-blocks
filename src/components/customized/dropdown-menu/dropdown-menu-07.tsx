import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bolt,
  ExternalLink,
  Filter,
  LogIn,
  LogOut,
  Rocket,
  Settings2,
  User,
} from "lucide-react";

export default function ComplexDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            M
          </AvatarFallback>
        </Avatar>
        <div className="text-start flex flex-col">
          <p className="text-sm font-medium">My Workspace</p>
          <p className="text-xs text-muted-foreground">myworkspace.slack.com</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-72">
        <DropdownMenuItem className="py-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              MW
            </AvatarFallback>
          </Avatar>
          <div className="ml-1 flex flex-col">
            <p className="text-sm font-medium">My Workspace</p>
            <p className="text-xs text-muted-foreground">
              myworkspace.slack.com
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-col items-start">
          <div className="flex items-center gap-1">
            <Rocket className="mr-1 h-[18px] w-[18px]" />
            <span className="font-medium leading-none">Upgrade</span>
          </div>
          <p className="text-muted-foreground">
            You&apos;re on a free version of Slack.
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-1" /> Invite people
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings2 className="mr-1" /> Preferences
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Filter className="mr-1" />
            Filter sidebar
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Activity</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem checked>
                  All activity
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Unread messaged only
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Mentions only
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Customize by section
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>People</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem checked>
                  Everyone
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Without external people
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Including external people
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Bolt className="mr-1" />
            Tools & settings
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-52">
            <DropdownMenuLabel>Tools</DropdownMenuLabel>
            <DropdownMenuItem>Customize workspace</DropdownMenuItem>
            <DropdownMenuItem>Workspace builder</DropdownMenuItem>
            <DropdownMenuItem>
              Workspace analytics <ExternalLink className="ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Administration</DropdownMenuLabel>
            <DropdownMenuItem>Manage apps</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogIn className="mr-1" /> Sign in on mobile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-1" /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
