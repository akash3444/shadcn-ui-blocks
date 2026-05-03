import { ArrowUpRight } from "lucide-react";
import { Button } from "@/registry/ui/radix/button";

export default function Integrations() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-6 py-20">
      <h2 className="text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Our Integrations
      </h2>
      <p className="mt-3 text-pretty text-center text-muted-foreground text-xl -tracking-[0.01em] sm:text-2xl">
        Connect your favorite tools and services
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <div
            className="flex flex-col items-start rounded-lg border bg-card p-6 shadow-xs/3"
            key={integration.title}
          >
            <div className="grow">
              <img
                alt={integration.title}
                className="size-10 rounded"
                src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(integration.url)}&sz=64`}
              />
              <h3 className="mt-5 font-medium text-xl">{integration.title}</h3>
              <p className="mt-1 text-pretty text-muted-foreground tracking-normal">
                {integration.description}
              </p>
            </div>

            <Button className="mt-6">
              Connect <ArrowUpRight />
            </Button>
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
