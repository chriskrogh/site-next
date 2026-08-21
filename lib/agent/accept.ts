type MediaRange = {
  type: string;
  subtype: string;
  q: number;
};

const parseMediaRange = (value: string): MediaRange | null => {
  const [mediaType, ...params] = value.trim().split(";");
  const [type, subtype] = mediaType.trim().split("/");

  if (!type || !subtype) {
    return null;
  }

  let q = 1;

  for (const param of params) {
    const [name, rawValue] = param.trim().split("=");
    if (name?.trim().toLowerCase() === "q" && rawValue) {
      const parsed = Number.parseFloat(rawValue.trim());
      if (!Number.isNaN(parsed)) {
        q = parsed;
      }
    }
  }

  return {
    type: type.toLowerCase(),
    subtype: subtype.toLowerCase(),
    q,
  };
};

const specificity = (range: MediaRange) => {
  if (range.type === "*" && range.subtype === "*") {
    return 0;
  }

  if (range.subtype === "*") {
    return 1;
  }

  return 2;
};

export const parseAcceptHeader = (acceptHeader: string): MediaRange[] =>
  acceptHeader
    .split(",")
    .map(parseMediaRange)
    .filter((range): range is MediaRange => range !== null)
    .sort((left, right) => {
      if (right.q !== left.q) {
        return right.q - left.q;
      }

      return specificity(right) - specificity(left);
    });

export const prefersMediaType = (
  acceptHeader: string,
  preferredType: string,
  fallbackType: string
) => {
  const ranges = parseAcceptHeader(acceptHeader);

  if (ranges.length === 0) {
    return false;
  }

  const preferred = preferredType.toLowerCase().split("/");
  const fallback = fallbackType.toLowerCase().split("/");

  const matches = (range: MediaRange, [type, subtype]: string[]) =>
    (range.type === type || range.type === "*") &&
    (range.subtype === subtype || range.subtype === "*");

  const preferredIndex = ranges.findIndex((range) =>
    matches(range, preferred)
  );
  const fallbackIndex = ranges.findIndex((range) => matches(range, fallback));

  if (preferredIndex === -1) {
    return false;
  }

  if (fallbackIndex === -1) {
    return true;
  }

  return preferredIndex <= fallbackIndex;
};

export const prefersMarkdown = (acceptHeader: string) => {
  if (!/\btext\/markdown\b/i.test(acceptHeader)) {
    return false;
  }

  return prefersMediaType(acceptHeader, "text/markdown", "text/html");
};
