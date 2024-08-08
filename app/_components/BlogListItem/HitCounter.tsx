"use client";

import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components/ui/skeleton";

import { fetchHitAction } from "./fetchHitAction";

type Props = {
  slug: string;
};

/**
 * TODO: Turn this into a server component when useMDXComponent supports React 19
 */
export const HitCounter: React.FC<Props> = async ({ slug }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["hit", slug],
    queryFn: () => fetchHitAction(slug),
  });

  if (isLoading) {
    return <Skeleton className="w-[48px] h-[20px]" />;
  }

  return data ? (
    <p className="text-slate-700 dark:text-slate-300">{data} views</p>
  ) : null;
};
