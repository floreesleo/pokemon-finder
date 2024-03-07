"use client";
import Image from "next/image";

export default function PokemonImage({ image, name }) {
  return (
    <Image src={image} alt={"Imagen de " + name} width={200} height={200} />
  );
}
