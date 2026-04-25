import { ImageResponse } from "next/og";

import {
  loadOgFonts,
  OG_IMAGE_CONTENT_TYPE,
  OG_IMAGE_SIZE,
  OgCard,
} from "./_utils/og-image";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "./_utils/seo";

export const alt = `${SITE_NAME} - ${DEFAULT_DESCRIPTION}`;
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

const Image = async () => {
  const title = SITE_NAME;
  const description = DEFAULT_DESCRIPTION;
  const eyebrow = "Software engineering";
  const footer = "React / Next.js / TypeScript";

  return new ImageResponse(
    (
      <OgCard
        title={title}
        description={description}
        eyebrow={eyebrow}
        footer={footer}
      />
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: await loadOgFonts(`${title} ${description} ${eyebrow} ${footer}`),
    }
  );
};

export default Image;
