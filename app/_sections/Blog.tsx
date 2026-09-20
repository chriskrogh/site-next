import { BlogListItem } from "@/app/_components/BlogListItem/BlogListItem";
import { getPublicBlogPosts } from "@/app/_utils/post";
import { Card, CardContent } from "@/components/ui/card";

const MAX_POSTS = 3;
const POSTS = getPublicBlogPosts()
  .slice(0, MAX_POSTS)
  .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

export const Blog: React.FC = async () => {
  return (
    <>
      <p className="mb-4">
        I also think about things from time to time, and try to write them down
        whenever I get a chance. Posts focus on practical frontend engineering:
        server components, data fetching, performance work, and lessons from
        shipping product at scale.
      </p>
      <Card>
        <CardContent className="p-6">
          {POSTS.map((post, index) => (
            <div key={post._id}>
              {index > 0 && <hr className="mb-2" />}
              <BlogListItem post={post} />
              {index < POSTS.length - 1 && <div className="mb-2" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
