import type { Template } from "@/description/templates";

export default function TemplatePreview({
  eager,
  template,
}: {
  eager: boolean;
  template: Template;
}) {
  return (
    <div className="h-[520px] overflow-hidden rounded-xl border shadow-xs/2 md:h-[720px]">
      <iframe
        className="h-full w-full bg-background"
        loading={eager ? "eager" : "lazy"}
        src={template.url}
        title={`${template.name} live preview`}
      />
    </div>
  );
}
