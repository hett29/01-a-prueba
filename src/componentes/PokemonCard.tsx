import type { Pokemon } from "../Interfaces/Pokemon";

interface Props {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={120}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>

      <p>ID: {pokemon.id}</p>
    </div>
  );
}

export default PokemonCard;