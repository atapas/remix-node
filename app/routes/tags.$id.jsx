import { Link, useLoaderData } from "@remix-run/react";
import { getAllPosts } from "../queries/blog-data";
import { PostCard, PostList } from "../components";

export async function loader({ params }) {
  const { id } = params; // get the tag id
  const posts = await getAllPosts([id]);
  const data = {posts, id};
  return data;// return all the posts
}

export default function PostByTag() {
  const {posts, id} = useLoaderData();
  const tags = posts[0].node.tags;
  const foundTag = tags.find((tag) => tag.id === id);
 
  return (
    <div className="flex flex-col">
      <div className="flex pt-4 pl-4 text-2xl">
        <p className="mr-2">
          {posts.length} posts found for the tag <strong>{foundTag.name}</strong>
        </p>   
        <span className="mr-2">|</span>
        <Link 
          className="underline"
          to="/posts"
          >
            See all the posts
          </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
