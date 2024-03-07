"use client";
import Image from "next/image";

export default function PokemonImage({ image, name }) {
  return (
    <Image
      src={image}
      alt={"Imagen de " + name}
      width={250}
      height={250}
      priority
    />
  );
}
