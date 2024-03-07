"use client";

import { getPokemonList } from "@/lib/pokemonList";
import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await getPokemonList();
      setPokemones(data);
    };

    fetchPokemonList();
  }, []);
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-2">
      {pokemones.map((pokemon) => (
        <div className="mx-2 my-1">
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        </div>
      ))}
    </div>
  );
}
