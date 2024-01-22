import React from 'react';
import PokemonListItem from '@/components/PokemonListItem.tsx';
import { Pokemon } from 'pokenode-ts';

interface PokemonListProps {
  pokemon: Pokemon[];
  favorites: string[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon, favorites }) => {
  const favoritesSet = new Set(favorites);

  return (
    <ul className="flex gap-8 flex-wrap justify-center">
      {pokemon.map((x, i) => (
        <PokemonListItem
          key={`pokemon-list-item-${i}`}
          pokemon={x}
          isFavorite={favoritesSet.has(x.name)}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
