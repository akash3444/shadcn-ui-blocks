/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.shadcnui-blocks.com/:path*",
        has: [
          {
            type: "host",
            value: "shadcn-ui-blocks.akashmoradiya.com",
          },
        ],
        permanent: true,
      },
      // Blocks ship as a single Base UI registry at /r/*. Keep previously
      // published install URLs resolving.
      {
        source: "/r/:primitive(base|radix)/:path*",
        destination: "/r/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "www.fffuel.co",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/blocks/*": ["./src/**/*.{js,ts,tsx}"],
  },
  outputFileTracingExcludes: {
    "*": [
      ".next/cache/webpack",
      ".git/**/*",
      "public/images/blocks/**/*",
      "public/images/templates/**/*",
      "public/r/**/*",
      "node_modules/@shikijs/langs/**/*",
      "node_modules/@shikijs/themes/**/*",
    ],
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
