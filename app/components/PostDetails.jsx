export default function PostCard({ post }) {
  return (
    <article className="bg-white p-3 mt-3 flex flex-col">
      <img className="rounded-lg" src={post.coverImage?.url} alt={post.title} />
      <h1 className="text-4xl font-bold pt-5">{post?.title}</h1>
      <h2 className="text-xl pt-3 pb-3">{post.subtitle}</h2>

      <div className="post-details">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </article>
  );
}
