import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Vary",
            value:
              "Accept, Accept-Encoding, rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: ["rehype-highlight"],
  },
});

export default withMDX(nextConfig);
