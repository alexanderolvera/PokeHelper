import React from 'react';
import { Pokemon } from 'pokenode-ts';

interface PokemonDetailProps {
  pokemon: Pokemon;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  return (
    <li className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white border border-gray-200 items-center">
      <p className="w-full justify-center text-center text-black">{pokemon.name}</p>

      {!!pokemon.sprites.front_default && (
        <img className="w-28" src={pokemon.sprites.front_default} alt={pokemon.name + '-image'} />
      )}

      <ul>
        <li>Height: {pokemon.height}</li>
      </ul>
      <ul>
        <li>Weigth: {pokemon.weight}</li>
      </ul>
      <ul>
        <li>Base experience: {pokemon.base_experience}</li>
      </ul>

      <ul>
        <li>Types:</li>
        {pokemon.types.map((x) => (
          <li>{x.type.name}</li>
        ))}
      </ul>

      <ul>
        <li>Abilities:</li>
        {pokemon.abilities.map((x) => (
          <li>{x.ability.name}</li>
        ))}
      </ul>

      <ul>
        <li>Stats:</li>
        {pokemon.stats.map((x) => (
          <li>
            {x.stat.name}: {x.base_stat}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default PokemonDetail;
