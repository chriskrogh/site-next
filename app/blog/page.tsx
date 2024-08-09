import { getAllBlogPosts } from "@/app/_utils/post";

import { BlogListItem } from "../_components/BlogListItem";
import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

const POSTS = getAllBlogPosts();

const Page: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        {POSTS.map((post, index) => (
          <div key={post._id}>
            {index > 0 && <hr className="mb-2" />}
            <BlogListItem post={post} />
            {index < POSTS.length - 1 && <div className="mb-2" />}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
