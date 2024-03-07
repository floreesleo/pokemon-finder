import { getPokemon } from "@/lib/pokemonList";
import PokemonImage from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";

export default async function page({ params }) {
  //? params recibe el nombre que se pasa a la url del proyecto, por ejemplo:
  //? localhost:3000/pikachu
  //? Y el nombre que recibe ese params, se pasa a la consante pokemonName, que al mismo tiempo se pasa como parametro a la funcion getPokemon() de pokemonList.js

  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-black">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h2>
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
        <h3>Weight: {pokemonObject.weight}</h3>

        <div className="flex flex-col">
          {pokemonObject.stats.map((statObject) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
              <div key={statName} className="flex items-stretch">
                <h3 className="p-2 w-2/4">
                  {statName}: {statValue}
                </h3>
                <Progress value={statValue} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
