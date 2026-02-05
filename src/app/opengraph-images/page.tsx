import { OgImagesList } from "@/components/og-images/og-images-list";
import { getOgImagesInDisplayOrder } from "@/config/registry/og-images";

function OpengraphImagesPage() {
  const ogImages = getOgImagesInDisplayOrder();

  return (
    <div className="mx-auto w-full max-w-[calc(1200px+2px)] border-x">
      <div className="h-20 border-b bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      <OgImagesList ogImages={ogImages} />
      <div className="h-20 bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
    </div>
  );
}

export default OpengraphImagesPage;
