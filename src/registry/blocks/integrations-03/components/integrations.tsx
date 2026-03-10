import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Integrations() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-6 py-12 sm:py-14">
      <h2 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Our Integrations
      </h2>
      <p className="mt-3 text-pretty text-center text-muted-foreground text-xl sm:text-2xl">
        Connect your favorite tools and services to your account.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <div
            className="flex items-center gap-4 rounded-lg border bg-card pe-4"
            key={integration.title}
          >
            <div className="border-e border-dashed p-4">
              <img
                alt={integration.title}
                className="size-8 rounded"
                src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(integration.url)}&sz=64`}
              />
            </div>
            <h3 className="font-semibold text-lg">{integration.title}</h3>

            {integration.status === "connected" ? (
              <Badge className="ms-auto">
                Connected <Check />
              </Badge>
            ) : (
              <Button className="ms-auto h-7.5" size="sm" variant="outline">
                Connect <ArrowUpRight />
              </Button>
            )}
          </div>
        ))}
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
    status: "pending",
  },
  {
    title: "Notion",
    description:
      "Note-taking and project management tool for organizing ideas, tasks, and documents.",
    url: "https://notion.com",
    status: "pending",
  },
  {
    title: "Stripe",
    description: "Payment processing for online businesses and platforms.",
    url: "https://stripe.com",
    status: "pending",
  },
  {
    title: "Resend",
    description: "Email platform for developers to send, track, and manage.",
    url: "https://resend.com",
    status: "pending",
  },
  {
    title: "Zapier",
    description:
      "Automation tool for connecting and syncing data between different apps and services.",
    url: "https://zapier.com",
    status: "pending",
  },
  {
    title: "Cal.com",
    description:
      "Calendar booking tool for scheduling meetings and appointments.",
    url: "https://cal.com/",
    status: "pending",
  },
  {
    title: "Linear",
    description: "Project management tool for tracking tasks and projects.",
    url: "https://linear.app/",
    status: "pending",
  },
  {
    title: "Plausible",
    description:
      "Analytics tool for tracking website traffic and user behavior.",
    url: "https://plausible.io/",
    status: "pending",
  },
  {
    title: "Webflow",
    description: "Website builder for creating and managing websites.",
    url: "https://webflow.com/",
    status: "pending",
  },
  {
    title: "Sanity",
    description:
      "Content management system for creating and managing websites.",
    url: "https://sanity.io/",
    status: "pending",
  },
  {
    title: "Clerk",
    description: "Authentication for your website and application.",
    url: "https://clerk.com/",
    status: "pending",
  },
];
