import { ogImages } from "@/config/registry/og-images";

export const runtime = "edge";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new Response("Block ID is required", {
      status: 400,
    });
  }

  const ogImage = ogImages.find((b) => b.name === id);

  if (!ogImage) {
    return new Response("Block not found", {
      status: 404,
    });
  }

  return await import(`@/registry/og-images/${id}/route`).then((module) => {
    return module.GET(req);
  });
}
