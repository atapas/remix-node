import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import blog from '../../public/blog.jpeg';

export const meta = () => {
  return [
    { title: "RemixNode - Home" },
    { name: "description", content: "A Blog Frint-End with Remix Framework and Headless Hashnode!" },
  ];
};

export default function Index() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
      <img
        className="w-full h-screen bg-center bg-cover blur-sm"
        alt="blog" 
        src={blog} />
        <div className="absolute p-2 flex flex-col justify-center items-center z-10 bg-teal-50 lg:w-2/5 h-1/4 rounded-md">
          <div className="flex pb-5 mb-5 text-5xl text-back">
            <p>RemixNode Blog</p>
          </div>
          <div>
            <Link
              to="/posts"
              className="bg-black text-white hover:bg-black/90 p-3 rounded-sm text-lg text mr-2"
            >
              TAKE ME TO THE POSTS
            </Link>
          </div>
			</div>
  </div>
  );
}
