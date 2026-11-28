"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

const initialNotifications = [
  {
    id: "comment",
    name: "Olivia Martin",
    initials: "OM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    action: "commented on",
    target: "Onboarding checklist",
    time: "2 min ago",
    unread: true,
  },
  {
    id: "invite",
    name: "Ethan Brooks",
    initials: "EB",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    action: "invited you to",
    target: "Design team",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: "mention",
    name: "Sofia Reyes",
    initials: "SR",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    action: "mentioned you in",
    target: "Q3 roadmap",
    time: "Yesterday",
    unread: false,
  },
];

export default function CardNotificationsDemo() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({ ...notification, unread: false }))
    );
  };

  return (
    <Card className="w-full max-w-sm gap-0">
      <CardHeader className="border-b">
        <CardTitle className="row-span-2 self-center">
          Notifications{" "}
          {unreadCount > 0 ? (
            <span className="text-muted-foreground">({unreadCount})</span>
          ) : null}
        </CardTitle>
        <CardAction className="self-center">
          <Button
            disabled={unreadCount === 0}
            onClick={markAllAsRead}
            size="sm"
            variant="ghost"
          >
            Mark all as read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="px-0">
        <ul className="divide-y">
          {notifications.map((notification) => (
            <li className="flex gap-3 px-4 py-3" key={notification.id}>
              <Avatar>
                <AvatarImage alt={notification.name} src={notification.image} />
                <AvatarFallback>{notification.initials}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {notification.name}
                  </span>{" "}
                  {notification.action}{" "}
                  <span className="font-medium text-foreground">
                    {notification.target}
                  </span>
                </p>
                <span className="text-muted-foreground text-xs">
                  {notification.time}
                </span>
              </div>
              {notification.unread ? (
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary">
                  <span className="sr-only">Unread</span>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
