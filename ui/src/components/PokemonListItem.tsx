import React from 'react';
import { Pokemon } from 'pokenode-ts';

interface PokemonListItemProps {
  pokemon: Pokemon;
}
const PokemonListItem: React.FC<PokemonListItemProps> = ({ pokemon }) => {
  return (
    <li className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white border border-gray-200">
      {!!pokemon.sprites.front_default && (
        <img className="w-28" src={pokemon.sprites.front_default} alt={pokemon.name + '-image'} />
      )}

      <p className="w-full justify-center text-center text-black">{pokemon.name}</p>
    </li>
  );
};

export default PokemonListItem;
