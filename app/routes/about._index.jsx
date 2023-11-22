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
      <div className="about-content" dangerouslySetInnerHTML={{ __html: page.content.html }} />
    </div>
  )
}