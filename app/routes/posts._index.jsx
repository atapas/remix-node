import {useLoaderData} from '@remix-run/react';

import {PostList} from '../components';
import {getAllPosts} from '../queries/blog-data';


export async function loader() {
  const posts = await getAllPosts();
  return posts ;
}

export default function Posts() {
  const posts = useLoaderData();
  return (
    <>
     <PostList posts={posts} />
    </>
  );
}