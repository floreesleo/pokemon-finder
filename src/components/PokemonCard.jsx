import Link from "next/link";

export default function PokemonCard({ name }) {
  return (
    <Link
      href="/"
      key={name + "Card"}
      className=" py-6 flex flex-col border border-neutral-100 items-center hover:bg-neutral-700 hover:rounded"
    >
      <h3 className="font-bold text-2xl">{name}</h3>
    </Link>
  );
}
