"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
  code: string;
};

export const Content: React.FC<Props> = ({ code }) => {
  const MDXContent = useMDXComponent(code);
  return <MDXContent />;
};
