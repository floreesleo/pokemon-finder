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
      <h3 className="text-2xl py-4 text-center text-yellow-500 font-bold">
        ¡Busca a tú Pokemon!
      </h3>
      <div className="grid justify-center gap-2 mb-4">
        <Label htmlFor="pokemonName" className="text-center text-lg">
          Nombre del Pokemon
        </Label>
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
        <h3 className="text-2xl font-semibold text-violet-500 hover:text-white hover:font-bold hover:duration-150">
          Pokemon Collection
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 mt-4">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard name={pokemon.name} key={pokemon.name} />
        ))}
      </div>
    </div>
  );
}
