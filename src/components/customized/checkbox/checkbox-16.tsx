"use client";

import {
  Bell,
  CalendarCheck,
  CalendarCog,
  CalendarPlus,
  CalendarX,
  type LucideIcon,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/registry/ui/checkbox";

interface NotificationType {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function Checkbox16() {
  return (
    <div>
      <Label className="ps-1 font-medium">Notification Settings</Label>
      <div className="mt-2.5 rounded-lg border bg-muted/30">
        <ScrollArea className="h-64">
          <table className="w-full">
            <thead className="sticky top-0 rounded-t-lg bg-muted/80 backdrop-blur-sm">
              <tr className="rounded-t-lg border-b *:first:rounded-tl-lg *:last:rounded-tr-lg">
                <th className="p-3 text-left font-medium text-muted-foreground text-xs">
                  Notification Type
                </th>
                <th className="w-16 p-3 font-medium text-muted-foreground text-xs">
                  In-App
                </th>
                <th className="w-16 p-3 font-medium text-muted-foreground text-xs">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes.map((notificationType, index) => (
                <tr
                  className="border-b last:border-b-0"
                  key={notificationType.value}
                >
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <notificationType.icon className="size-4 text-muted-foreground" />
                      <span className="text-sm">{notificationType.label}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <Checkbox
                      className="bg-background"
                      defaultChecked={index < 3}
                      id={`${notificationType.value}-in-app`}
                      value={`${notificationType.value}-in-app`}
                    />
                  </td>
                  <td className="p-3 text-center">
                    <Checkbox
                      className="bg-background"
                      defaultChecked={index < 3}
                      id={`${notificationType.value}-email`}
                      value={`${notificationType.value}-email`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </div>
  );
}

const notificationTypes: NotificationType[] = [
  { label: "New Booking", value: "new-booking", icon: CalendarPlus },
  { label: "Booking Cancelled", value: "booking-cancelled", icon: CalendarX },
  { label: "Booking Updated", value: "booking-updated", icon: CalendarCog },
  { label: "Booking Reminder", value: "booking-reminder-1", icon: Bell },
  {
    label: "Booking Confirmation",
    value: "booking-confirmation",
    icon: CalendarCheck,
  },
  { label: "Payment Reminder", value: "payment-reminder", icon: Bell },
  { label: "Upcoming Reminder", value: "upcoming-reminder", icon: Bell },
];
