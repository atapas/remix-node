import { useLoaderData } from "@remix-run/react";
import { getPage } from "../queries/blog-data";
import { PostCard, PostList } from "../components";

export async function loader() {
  const page = getPage();
  return page;
}

export default function About() {
  const page = useLoaderData();
  return(
    <div className="flex flex-col justify-center p-2">
      <h2 className="text-3xl mb-3">{page.title} Page</h2>
      <div className="p-4" dangerouslySetInnerHTML={{ __html: page.content.html }} />
    </div>
  )
}