export type Post = {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  url: string;
  title?: string;
  description?: string;
  date?: string;
};

const createPost = (
  flattenedPath: string,
  metadata: Pick<Post, "title" | "description" | "date">
): Post => ({
  _id: flattenedPath,
  _raw: {
    flattenedPath,
  },
  url: `/${flattenedPath}`,
  title: metadata.title,
  description: metadata.description,
  date: metadata.date,
});

export const allPosts: Post[] = [
  createPost("about", {
    title: "About",
  }),
  createPost("blog/infinite-scroll-server-components", {
    title: "Infinite Scroll Server Components with Next.js and react-query",
    description:
      "Learn how to implement infinite scroll using server components and server actions in Next.js and react query. Optimize performance by fetching and rendering data on demand without page reloads, ensuring a seamless user experience. Perfect for long lists or feeds in React applications.",
    date: "2024-08-05T17:00:00Z",
  }),
  createPost("blog/the-art-of-doing-more", {
    title: "The Art of Doing More",
    description:
      "Learn how to balance feature work with non-roadmap projects, enhance your engineering skills, and drive impact across your company. Discover strategies for managing expectations, aligning with company goals, and unlocking growth opportunities in your development career.",
    date: "2024-09-30T17:00:00Z",
  }),
];

export const getBlogPostSlug = (post: Post) =>
  post._raw.flattenedPath.replace("blog/", "");

export const getAllBlogPosts = () =>
  allPosts.filter((post) => post._raw.flattenedPath.includes("blog/"));
