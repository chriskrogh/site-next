import { Post } from "contentlayer/generated";

export const getBlogPostSlug = (post: Post) =>
  post._raw.flattenedPath.replace("blog/", "");
