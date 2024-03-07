import { Progress } from "@/components/ui/progress";

export default function PokemonStats({ statName, statValue }) {
  return (
    <div className="flex items-stretch">
      <h3 className="p-2 w-2/4">
        {statName}: {statValue}
      </h3>
      <Progress value={statValue} />
    </div>
  );
}
