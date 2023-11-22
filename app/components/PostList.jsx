import { Link } from "@remix-run/react";
import { PostCard } from ".";
import { getFormattedDate } from "../utils";

export default function PostList({ posts }) {
  const firstPost = posts[0].node;
  const restPosts = posts.slice(1);

  return (
    <>
      <div className="px-8 py-8 bg-gray-100">
        <Link to={`/posts/${firstPost.slug}`} >
          <article className="mt-4">
            <h3 className="text-xl font-semibold">{firstPost.title}</h3>
            <p className="text-gray-500">Posted on {getFormattedDate(firstPost.publishedAt)}</p>
            <img
              alt="Cover image"
              className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
              src={firstPost.coverImage?.url}
            />
            <p className="mt-4 text-gray-700">{firstPost.brief}</p>
          </article>
        </Link>
      </div>
      {restPosts.length > 0 && <div className="px-8 py-16">
        <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            restPosts.map((post) => (
              <PostCard key={post?.node?.slug} post={post?.node} />
            ))
          }
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 mt-8">
          Show More Posts
        </button>
      </div>}
    </>
  );
}
