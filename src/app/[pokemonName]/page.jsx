import { getPokemon } from "@/lib/pokemonList";
import PokemonImage from "@/components/PokemonImage";
import PokemonStats from "@/components/PokemonStats";
import { Suspense } from "react";
import PokemonList from "@/components/PokemonList";

export default async function page({ params }) {
  //? params recibe el nombre que se pasa a la url del proyecto, por ejemplo:
  //? localhost:3000/pikachu
  //? Y el nombre que recibe ese params, se pasa a la consante pokemonName, que al mismo tiempo se pasa como parametro a la funcion getPokemon() de pokemonList.js

  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-black my-4">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </h2>
          <PokemonImage
            image={
              pokemonObject.sprites.other["official-artwork"].front_default
            }
            name={pokemonName}
          />
          <h3 className="font-bold mt-3">Weight: {pokemonObject.weight}</h3>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            {pokemonObject.stats.map((statObject) => {
              return (
                <PokemonStats
                  statName={statObject.stat.name}
                  statValue={statObject.base_stat}
                  key={statObject.stat.name}
                />
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center my-6">
        <h3 className="text-violet-500 text-3xl font-bold">Otros Pokemon</h3>
      </div>
      <Suspense fallback={<div>Cargando otros Pokemon...</div>}>
        <PokemonList />
      </Suspense>
    </div>
  );
}
