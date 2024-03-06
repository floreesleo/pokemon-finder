"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemonList }) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <div>
      <h3 className="text-2xl py-6 text-center text-yellow-500 font-bold">
        ¡Busca a tú Pokemon!
      </h3>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="pokemonName">Nombre del Pokemon</Label>
        <Input
          type="text"
          value={searchText}
          id="pokemonName"
          autocomplete="off"
          placeholder="Charizard, Pikachu, etc..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <hr />
      <div className="flex justify-center mt-4">
        <h3 className="text-2xl font-semibold">Pokemon Collection</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 mt-4">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}
