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
    <div className="max-w-(--breakpoint-sm) md:mx-auto py-12 md:py-20 px-6">
      <div className="relative">
        {/* Timeline line */}
        {/* <div className="absolute left-0 top-3 bottom-0 border-l-2" /> */}

        {changelog
          .reverse()
          .map(({ title, description, date, version }, index) => (
            <div key={index} className="group relative">
              {/* Content */}
              <div className="flex items-start">
                <div className="mt-3 mr-5 flex flex-col gap-2 shrink-0 w-[75px] sm:w-[90px] text-end">
                  <h6 className="text-sm text-primary font-semibold">
                    v{version}
                  </h6>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {date}
                  </span>
                </div>
                <div className="relative pb-10 border-l-2 group-last:pb-4 pl-6 sm:pl-8 space-y-2">
                  {/* Timeline Dot */}
                  <div className="absolute h-3 w-3 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-primary bg-background" />

                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
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
