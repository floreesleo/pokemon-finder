"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function PokemonGrid() {
  const [searchText, setSearchText] = useState("");
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
    </div>
  );
}
