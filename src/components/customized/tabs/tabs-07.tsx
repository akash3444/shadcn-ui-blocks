import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const stats = [
  { label: "Open tasks", value: "6" },
  { label: "Completed", value: "8" },
  { label: "Days left", value: "14" },
];

const activity = [
  { id: "a1", text: "Homepage hero copy approved", time: "2h ago" },
  { id: "a2", text: "Pricing page moved to review", time: "Yesterday" },
  { id: "a3", text: "New navigation spec shared", time: "Mon" },
];

const files = [
  { id: "f1", name: "wireframes-v3.fig", size: "18.4 MB" },
  { id: "f2", name: "content-audit.xlsx", size: "640 KB" },
  { id: "f3", name: "brand-guidelines.pdf", size: "4.1 MB" },
];

export default function TabsInCardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <Tabs className="gap-4" defaultValue="overview">
        <CardHeader>
          <CardTitle>Website redesign</CardTitle>
          <CardDescription>
            Marketing site refresh for Q1 launch.
          </CardDescription>
          <TabsList className="mt-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="overview">
            <dl className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div className="flex flex-col gap-1" key={stat.label}>
                  <dt className="text-muted-foreground text-xs">
                    {stat.label}
                  </dt>
                  <dd className="font-medium text-lg tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </TabsContent>
          <TabsContent value="activity">
            <ul className="flex flex-col gap-3">
              {activity.map((item) => (
                <li
                  className="flex items-center justify-between gap-3"
                  key={item.id}
                >
                  <span className="truncate">{item.text}</span>
                  <span className="shrink-0 text-muted-foreground text-xs">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="files">
            <ul className="flex flex-col gap-3">
              {files.map((file) => (
                <li
                  className="flex items-center justify-between gap-3"
                  key={file.id}
                >
                  <span className="truncate">{file.name}</span>
                  <span className="shrink-0 text-muted-foreground text-xs tabular-nums">
                    {file.size}
                  </span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
