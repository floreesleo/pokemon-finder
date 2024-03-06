import React from "react";
import PokemonGrid from "@/components/PokemonGrid";
import PokemonCard from "@/components/PokemonCard";
import { getPokemonList } from "@/lib/pokemonList";

export default async function HomePage() {
  const pokemonList = await getPokemonList();
  return (
    <div>
      <div className="flex justify-center mb-6">
        <PokemonGrid pokemonList={pokemonList} />
      </div>
    </div>
  );
}
