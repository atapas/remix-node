import { useLoaderData } from "@remix-run/react";
import { getAllPosts } from "../queries/blog-data";
import { PostCard, PostList } from "../components";

export async function loader({ params }) {
  const { id } = params; // get the post slug
  const posts = await getAllPosts([id]);
  return posts;// return the post data
}

export default function PostByTag() {
  const posts = useLoaderData();
  return (
    <PostList posts={posts} />
  );
}
