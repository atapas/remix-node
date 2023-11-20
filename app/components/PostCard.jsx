import { Link } from "@remix-run/react";

export default function PostCard({ post }) {
  return (
    <Link to={post.slug} className="card-title">
      <div class="p-6 bg-white rounded shadow-sm my-4">
        <h2 class="text-4xl pb-5 font-semibold">{post.title}</h2>
        <div class="flex lg:flex-row md:flex-col max-sm:flex-col ">
          <img
            class="w-full rounded-lg shadow-xl"
            src={post.coverImage?.url}
            alt={post.title}
          />
          <div class="flex flex-col m-4">
            <p class="mb-2 text-lg">{post.brief}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
