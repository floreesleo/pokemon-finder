import { Progress } from "@/components/ui/progress";

export default function PokemonStats({ statName, statValue }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex justify-end sm:px-2 lg:px-4">
        <h3 className="font-bold pr-2">{statName.toUpperCase()}: </h3>
        <p className="font-semibold">{statValue}</p>
      </div>
      <div>
        <Progress value={statValue} />
      </div>
    </div>
  );
}
