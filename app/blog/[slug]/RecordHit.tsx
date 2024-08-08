"use client";

import { useEffect } from "react";

import { hitAction } from "./_utils/hitAction";

type Props = {
  slug: string;
};

export const RecordHit: React.FC<Props> = ({ slug }) => {
  useEffect(() => {
    hitAction(slug);
  }, [slug]);
  return null;
};
