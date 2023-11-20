export default function PostCard({ post }) {
  return (
    <article class="bg-white p-3 mt-3 flex flex-col">
      <img class="rounded-lg" src={post.coverImage?.url} alt={post.title} />
      <h1 class="text-4xl font-bold pt-5">{post?.title}</h1>
      <h2 class="text-xl pt-3 pb-3">{post.subtitle}</h2>

      <div class="post-details">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </article>
  );
}
