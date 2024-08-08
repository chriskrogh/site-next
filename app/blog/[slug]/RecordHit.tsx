"use client";

import { useEffect } from "react";

import { recordHitAction } from "./_utils/recordHitAction";

type Props = {
  slug: string;
};

export const RecordHit: React.FC<Props> = ({ slug }) => {
  useEffect(() => {
    recordHitAction(slug);
  }, [slug]);
  return null;
};
