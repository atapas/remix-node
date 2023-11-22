import { Link } from "@remix-run/react";

export default function PostCard({ post }) {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <Link to={`/posts/${post.slug}`}>
        <img
          alt="Cover image for A Guide to CSS Flexbox"
          className="object-cover w-full h-auto"
          src={post.coverImage.url}
        />
        <h3 className="text-xl font-semibold p-4">{post.title}</h3>
        <p className="text-gray-500 p-4">Posted on {post.publishedAt}</p>
        <p className="mt-2 text-gray-700 p-4">
          {post.brief}
        </p>
      </Link>
    </div>
  );
}
