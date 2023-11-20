import { useLoaderData } from "@remix-run/react";
import { getPost } from "../queries/blog-data";
import { PostDetails } from "../components";

export async function loader({ params }) {
  const { slug } = params; // get the post slug
  const post = await getPost(slug);
  return post;// return the post data
}

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <PostDetails post={post} />
  );
}
