export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_IMAGE_CONTENT_TYPE = "image/png";

const FONT_FAMILY = "IBM Plex Mono";
const GOOGLE_FONT_FAMILY = "IBM+Plex+Mono:wght@400;600";
const FONT_WEIGHTS = [400, 600] as const;

const fontDataCache = new Map<string, Promise<ArrayBuffer>>();

const getFontCssUrl = (text: string) =>
  `https://fonts.googleapis.com/css2?family=${GOOGLE_FONT_FAMILY}&text=${encodeURIComponent(
    text
  )}`;

const loadGoogleFont = async (
  weight: (typeof FONT_WEIGHTS)[number],
  text: string
) => {
  const cacheKey = `${weight}:${text}`;
  const cachedFontData = fontDataCache.get(cacheKey);

  if (cachedFontData) return cachedFontData;

  const fontDataPromise = (async () => {
    const css = await fetch(getFontCssUrl(text), {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    }).then((response) => response.text());

    const fontFaceRegex =
      /font-weight:\s*(\d+);[\s\S]*?src:\s*url\(([^)]+)\)\s*format\('(opentype|truetype)'\)/g;
    const fontFaces = Array.from(css.matchAll(fontFaceRegex));
    const fontFace = fontFaces.find((match) => Number(match[1]) === weight);
    const fontUrl = fontFace?.[2];

    if (!fontUrl) {
      throw new Error(`Failed to load ${FONT_FAMILY} font data`);
    }

    return fetch(fontUrl).then((response) => response.arrayBuffer());
  })();

  fontDataCache.set(cacheKey, fontDataPromise);

  return fontDataPromise;
};

export const loadOgFonts = async (text: string) => {
  const [regular, semiBold] = await Promise.all([
    loadGoogleFont(400, text),
    loadGoogleFont(600, text),
  ]);

  return FONT_WEIGHTS.map((weight) => ({
    name: FONT_FAMILY,
    data: weight === 400 ? regular : semiBold,
    style: "normal" as const,
    weight,
  }));
};

type OgCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  footer?: string;
};

export const OgCard = ({
  title,
  description,
  eyebrow,
  footer,
}: OgCardProps) => (
  <div
    style={{
      background: "#222222",
      color: "#f8fafc",
      display: "flex",
      flexDirection: "column",
      fontFamily: FONT_FAMILY,
      height: "100%",
      justifyContent: "space-between",
      padding: 64,
      width: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {eyebrow ? (
        <div
          style={{
            color: "#94a3b8",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: -1,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div
        style={{
          color: "#f8fafc",
          display: "flex",
          fontSize: title.length > 54 ? 54 : 64,
          fontWeight: 600,
          letterSpacing: -3,
          lineHeight: 1.05,
          maxHeight: 150,
          overflow: "hidden",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#cbd5e1",
          display: "flex",
          fontSize: 24,
          fontWeight: 400,
          lineHeight: 1.3,
          maxHeight: 205,
          overflow: "hidden",
        }}
      >
        {description}
      </div>
    </div>
    <div
      style={{
        alignItems: "center",
        borderTop: "1px solid #334155",
        color: "#94a3b8",
        display: "flex",
        fontSize: 22,
        justifyContent: "space-between",
        paddingTop: 28,
      }}
    >
      <span>chriskrogh.com</span>
      {footer ? <span>{footer}</span> : null}
    </div>
  </div>
);
