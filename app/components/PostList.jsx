
import { PostCard } from ".";

export default function PostList({ posts }) {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post?.node?.slug} post={post?.node} />)
      ) : (
        <p>No blog posts found!</p>
      )}
    </>
  );
}
