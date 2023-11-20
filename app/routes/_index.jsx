import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "RemixNode" },
    { name: "description", content: "A Blog Frint-End with Remix Framework and Headless Hashnode!" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
    <Link
      to="/posts"
      className="text-xl text-blue-600 underline"
    >
      Blog Posts
    </Link>
  </div>
  );
}
