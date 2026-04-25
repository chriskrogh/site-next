import { format } from "date-fns/format";
import { ImageResponse } from "next/og";

import {
  loadOgFonts,
  OG_IMAGE_CONTENT_TYPE,
  OG_IMAGE_SIZE,
  OgCard,
} from "@/app/_utils/og-image";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostSlug,
} from "@/app/_utils/post";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/app/_utils/seo";

export const alt = `${SITE_NAME} blog post`;
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export const generateStaticParams = () =>
  getAllBlogPosts().map((post) => ({
    slug: getBlogPostSlug(post),
  }));

const Image = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const title = post?.title ?? SITE_NAME;
  const description = post?.description ?? DEFAULT_DESCRIPTION;
  const footer = post?.date ? format(new Date(post.date), "PPP") : "Blog";

  return new ImageResponse(
    (
      <OgCard
        title={title}
        description={description}
        eyebrow="Blog"
        footer={footer}
      />
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: await loadOgFonts(`${title} ${description} Blog ${footer}`),
    }
  );
};

export default Image;
