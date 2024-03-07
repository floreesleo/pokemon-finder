import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-neutral-900">
      <nav className="flex justify-center items-center">
        <Image src="/pokebola.png" width={30} height={30} />
        <Link href="/">
          <h1 className="text-3xl font-bold text-white m-4">Pokemon Finder</h1>
        </Link>
      </nav>
    </header>
  );
}
