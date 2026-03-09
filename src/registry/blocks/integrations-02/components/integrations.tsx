import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Integrations() {
  return (
    <div className="px-6">
      <div className="mx-auto my-12 flex w-full max-w-md flex-col rounded-lg border bg-muted p-1.5 shadow-xl/5 sm:my-14">
        <div className="rounded-md border bg-card p-6">
          <h2 className="font-semibold text-3xl tracking-tight">
            Our Integrations
          </h2>
          <p className="mt-1.5 text-pretty text-muted-foreground">
            Connect your favorite tools and services to your account and start
            using them in your app.
          </p>
          <div className="mx-auto mt-8 flex w-full flex-col gap-3">
            {integrations.map((integration) => (
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg border bg-card px-3 py-3",
                  {
                    "border-primary/10 bg-primary/8":
                      integration.status === "connected",
                  }
                )}
                key={integration.title}
              >
                <img
                  alt={integration.title}
                  className="size-8 rounded"
                  src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(integration.url)}&sz=64`}
                />
                <h3 className="font-semibold">{integration.title}</h3>

                {integration.status === "connected" ? (
                  <Badge className="ms-auto h-6">
                    Connected <Check />
                  </Badge>
                ) : (
                  <Button className="ms-auto h-7" size="sm" variant="outline">
                    Connect <ArrowUpRight />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const integrations = [
  {
    title: "PostHog",
    description: "PostHog is an open-source product analytics tool.",
    url: "https://posthog.com/",
    status: "connected",
  },
  {
    title: "Mailchimp",
    description:
      "Marketing platform for creating, sending, and automating emails.",
    url: "https://mailchimp.com",
  },
  {
    title: "Webflow",
    description: "Website builder for creating and managing websites.",
    url: "https://webflow.com/",
    status: "pending",
  },
  {
    title: "Stripe",
    description: "Payment processing for online businesses and platforms.",
    url: "https://stripe.com",
  },
  {
    title: "Sanity",
    description:
      "Content management system for creating and managing websites.",
    url: "https://sanity.io/",
    status: "pending",
  },
  {
    title: "Zapier",
    description:
      "Automation tool for connecting and syncing data between different apps and services.",
    url: "https://zapier.com",
  },
];
