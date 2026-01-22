const changelog = [
  {
    title: "Initial Release",
    description:
      "Launched the first version with core features and basic UI components.",
    version: "1.0.0",
    date: "2025-03-01",
  },
  {
    title: "UI Enhancements",
    description:
      "Improved the user interface with better accessibility and design consistency.",
    version: "1.1.0",
    date: "2025-03-05",
  },
  {
    title: "Performance Optimization",
    description:
      "Reduced load times and improved overall application performance.",
    version: "1.2.0",
    date: "2025-03-10",
  },
  {
    title: "New Feature: Dark Mode",
    description:
      "Added support for dark mode, allowing users to switch themes seamlessly.",
    version: "1.3.0",
    date: "2025-03-15",
  },
  {
    title: "Bug Fixes & Security Patch",
    description:
      "Fixed various minor bugs and patched security vulnerabilities.",
    version: "1.3.1",
    date: "2025-03-18",
  },
  {
    title: "New Components Added",
    description:
      "Introduced new UI components for better customization and flexibility.",
    version: "1.4.0",
    date: "2025-03-22",
  },
  {
    title: "Major Update: API Integration",
    description:
      "Integrated external APIs to enhance functionality and data synchronization.",
    version: "2.0.0",
    date: "2025-04-01",
  },
];

export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm) px-6 py-12 md:mx-auto md:py-20">
      <div className="relative">
        {/* Timeline line */}
        {/* <div className="absolute left-0 top-3 bottom-0 border-l-2" /> */}

        {changelog
          .reverse()
          .map(({ title, description, date, version }, index) => (
            <div className="group relative" key={index}>
              {/* Content */}
              <div className="flex items-start">
                <div className="mt-3 mr-5 flex w-[75px] shrink-0 flex-col gap-2 text-end sm:w-[90px]">
                  <h6 className="font-semibold text-primary text-sm">
                    v{version}
                  </h6>
                  <span className="text-muted-foreground text-xs sm:text-sm">
                    {date}
                  </span>
                </div>
                <div className="relative space-y-2 border-l-2 pb-10 pl-6 group-last:pb-4 sm:pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute top-4 -left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                  <h3 className="mt-2 font-semibold text-lg tracking-[-0.01em]">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
