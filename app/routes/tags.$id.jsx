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
    <>
      <div>
        <p>
          {posts.length} posts found for the tag <strong>{foundTag.name}</strong>
        </p>   
        <span>|</span>
        <Link to="/posts">See all the posts</Link>
      </div>
      <PostList posts={posts} />
    </>
  );
}
