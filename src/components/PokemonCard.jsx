import Link from "next/link";

export default function PokemonCard({ name }) {
  return (
    <Link
      href={name}
      key={name + "Card"}
      className="px-2 py-4 flex flex-col border-2 items-center hover:bg-neutral-100 hover:text-black hover:-translate-y-1 hover:duration-300 hover:border-black focus:bg-neutral-100 focus:text-black focus:border-black"
    >
      <h3 className="font-bold text-2xl">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
    </Link>
  );
}
