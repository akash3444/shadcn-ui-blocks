"use client";

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/registry/ui/checkbox";
import {
  CalendarPlus,
  CalendarX,
  CalendarCog,
  Bell,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

interface NotificationType {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function Checkbox16() {
  return (
    <div>
      <Label className="font-medium ps-1">Notification Settings</Label>
      <div className="bg-muted/30 mt-2.5 border rounded-lg">
        <ScrollArea className="h-64">
          <table className="w-full">
            <thead className="sticky top-0 bg-muted/80 backdrop-blur-sm rounded-t-lg">
              <tr className="border-b rounded-t-lg *:first:rounded-tl-lg *:last:rounded-tr-lg">
                <th className="text-left text-xs font-medium text-muted-foreground p-3">
                  Notification Type
                </th>
                <th className="text-xs font-medium text-muted-foreground p-3 w-16">
                  In-App
                </th>
                <th className="text-xs font-medium text-muted-foreground p-3 w-16">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes.map((notificationType, index) => (
                <tr
                  key={notificationType.value}
                  className="border-b last:border-b-0"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <notificationType.icon className="size-4 text-muted-foreground" />
                      <span className="text-sm">{notificationType.label}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <Checkbox
                      value={`${notificationType.value}-in-app`}
                      id={`${notificationType.value}-in-app`}
                      defaultChecked={index < 3}
                      className="bg-background"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <Checkbox
                      value={`${notificationType.value}-email`}
                      id={`${notificationType.value}-email`}
                      defaultChecked={index < 3}
                      className="bg-background"
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
