import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import type { Pokemon } from "../Interfaces/Pokemon";

function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const obtenerPokemones = async () => {
      const lista = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      ).then((res) => res.json());

      const detalles = await Promise.all(
        lista.results.map(async (pokemon: { url: string }) => {
          const respuesta = await fetch(pokemon.url);
          return respuesta.json();
        })
      );

      setPokemons(detalles);
    };

    obtenerPokemones();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;