export default function Integrations() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-6 py-12 sm:py-14">
      <h2 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Our Integrations
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl sm:text-2xl">
        Connect your favorite tools and services to your account.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <div
            className="relative flex flex-col items-start border bg-card p-8"
            key={integration.title}
          >
            {/* Decorative borders */}
            <div className="absolute inset-x-0 bottom-0 h-2 w-full border-t border-dashed bg-muted/75" />
            <div className="absolute inset-x-0 top-0 h-2 w-full border-b border-dashed bg-muted/75" />
            <div className="absolute inset-y-0 left-0 h-full w-2 border-e border-dashed bg-muted/75" />
            <div className="absolute inset-y-0 right-0 h-full w-2 border-s border-dashed bg-muted/75" />

            <img
              alt={integration.title}
              className="size-10 rounded"
              src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(integration.url)}&sz=64`}
            />
            <h3 className="mt-5 font-semibold text-xl">{integration.title}</h3>
            <p className="mt-1 text-pretty text-muted-foreground tracking-normal">
              {integration.description}
            </p>
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
