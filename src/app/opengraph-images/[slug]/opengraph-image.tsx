export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const RegistryImage = (
    await import(`@/registry/og-images/${slug}/opengraph-image`)
  ).default;
  return RegistryImage({ params });
}
