export type Post = {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  url: string;
  title?: string;
  description?: string;
  date?: string;
  keywords?: string[];
  private?: boolean;
};

const createPost = (
  flattenedPath: string,
  metadata: Pick<
    Post,
    "title" | "description" | "date" | "keywords" | "private"
  >
): Post => ({
  _id: flattenedPath,
  _raw: {
    flattenedPath,
  },
  url: `/${flattenedPath}`,
  title: metadata.title,
  description: metadata.description,
  date: metadata.date,
  keywords: metadata.keywords,
  private: metadata.private,
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
    keywords: [
      "Next.js",
      "React Server Components",
      "server actions",
      "react-query",
      "infinite scroll",
    ],
  }),
  createPost("blog/the-art-of-doing-more", {
    title: "The Art of Doing More",
    description:
      "Learn how to balance feature work with non-roadmap projects, enhance your engineering skills, and drive impact across your company. Discover strategies for managing expectations, aligning with company goals, and unlocking growth opportunities in your development career.",
    date: "2024-09-30T17:00:00Z",
    keywords: [
      "engineering career",
      "software engineering",
      "career growth",
      "technical leadership",
    ],
  }),
  createPost("blog/what-changes-my-slope-next", {
    title: "What Changes My Slope Next?",
    description:
      "A mental model for growth across many aspects of life: optimize for slope over position, backtrack from the destination, increase surface area for luck, own things that compound, and treat failure as part of the process.",
    date: "2026-09-08T17:00:00Z",
    keywords: [
      "career growth",
      "personal growth",
      "engineering career",
      "mental models",
      "compounding",
    ],
  }),
  createPost("blog/what-pops-built", {
    title: "What Pops Built",
    description:
      "Remembering my grandpa, Pops: a builder, storyteller, devoted husband, and relentlessly resourceful man who loved his family more than anything.",
    date: "2026-09-20T17:00:00Z",
    private: true,
    keywords: ["Pops", "family", "grandfather", "remembrance", "life lessons"],
  }),
];

export const getBlogPostSlug = (post: Post) =>
  post._raw.flattenedPath.replace("blog/", "");

export const getAllBlogPosts = () =>
  allPosts.filter((post) => post._raw.flattenedPath.includes("blog/"));

export const getPublicBlogPosts = () =>
  getAllBlogPosts().filter((post) => !post.private);

export const getBlogPostBySlug = (slug: string) =>
  getAllBlogPosts().find((post) => getBlogPostSlug(post) === slug);
