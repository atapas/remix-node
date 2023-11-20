export default function Navbar() {
  return (
    <nav className="flex flex-row bg-teal-500 p-3 text-white">
      <a className="text-2xl mr-3" href="/">Remex Node</a>
      <a className="text-xl pt-1 mr-2" href="/posts">Blog</a>
      <a className="text-xl pt-1 mr-2" href="/about">About</a>
    </nav>
  );
}
