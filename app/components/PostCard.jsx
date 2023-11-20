import { Link } from "@remix-run/react";
import { Tag } from ".";

export default function PostCard({ post }) {
  return (
    <div className="flex flex-col p-6 bg-white rounded shadow-sm m-4">
      <Link
        className="flex flex-col my-2" 
        to={`/posts/${post.slug}`}>
        <h2 className="text-4xl pb-5 font-semibold">{post.title}</h2>
        <div className="flex justify-center items-center lg:flex-col md:flex-col max-sm:flex-col ">
          <img
            className="w-1/2 rounded-lg shadow-xl"
            src={post.coverImage?.url}
            alt={post.title}
          />
          <div className="flex flex-col m-4">
            <p className="mb-2 text-lg">{post.brief}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center">
        {post?.tags.map((tag) => <Tag id={tag.id} tag={tag} />)}
      </div>
    </div>
  );
}
