import { Badge } from "@/components/ui/badge";
import { Building, Building2, Calendar, Store } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    icon: Building,
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    icon: Building2,
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2018 - 2021",
    description:
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    icon: Store,
  },
];

export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index
          ) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-base font-medium">{company}</p>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
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
