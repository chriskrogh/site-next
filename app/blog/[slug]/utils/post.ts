import { allPosts, Post } from "contentlayer/generated";

export const getAllBlogPosts = () =>
  allPosts.filter((post) => post._raw.flattenedPath.includes("blog/"));

export const getBlogPostSlug = (post: Post) =>
  post._raw.flattenedPath.replace("blog/", "");
