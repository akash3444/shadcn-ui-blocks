import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2018 - 2021",
    description:
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-(--breakpoint-sm) px-6 py-12 md:py-20">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute top-4 bottom-0 left-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div className="relative pb-12 pl-8 last:pb-0" key={index}>
              {/* Timeline dot */}
              <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background ring-8 ring-background" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-base">{company}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-pretty text-muted-foreground text-sm sm:text-base">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      className="rounded-full"
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
