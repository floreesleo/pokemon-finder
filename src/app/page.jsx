import React from "react";
import PokemonGrid from "@/components/PokemonGrid";
import PokemonCard from "@/components/PokemonCard";

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <PokemonGrid />
      </div>
      <hr />
      <div className="flex justify-center mt-4">
        <h3 className="text-2xl font-semibold">Pokemon Collection</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 mt-4">
        <PokemonCard name="Pikachu" />
        <PokemonCard name="laskdjlaksdj" />
        <PokemonCard name="Pikachu" />
      </div>
    </div>
  );
}
