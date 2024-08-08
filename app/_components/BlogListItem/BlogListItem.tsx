import { Post } from "contentlayer/generated";
import { format } from "date-fns/format";
import Link from "next/link";
import { Suspense } from "react";

import { getBlogPostSlug } from "@/app/_utils/post";
import { Skeleton } from "@/components/ui/skeleton";

import { HitCounter } from "./HitCounter";

type Props = {
  post: Post;
};

export const BlogListItem: React.FC<Props> = ({ post }) => {
  const slug = getBlogPostSlug(post);
  return (
    <Link href={post.url}>
      <h4>{post.title}</h4>
      <div className="flex gap-4 items-end">
        {post.date ? <p>{format(new Date(post.date), "PPP")}</p> : null}
        <Suspense fallback={<Skeleton className="w-[48px] h-[20px]" />}>
          <HitCounter slug={slug} />
        </Suspense>
      </div>
    </Link>
  );
};
