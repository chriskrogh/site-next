import { allPosts } from "contentlayer/generated";

export const getAllBlogPosts = () =>
  allPosts.filter((post) => post._raw.flattenedPath.includes("blog/"));
