import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-neutral-900">
      <nav className="flex justify-center items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white m-4">Pokemon Finder</h1>
        </Link>
      </nav>
    </header>
  );
}
