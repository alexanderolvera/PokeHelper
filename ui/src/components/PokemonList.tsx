import React from 'react';
import PokemonListItem from '@/components/PokemonListItem.tsx';
import { Pokemon } from 'pokenode-ts';

interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <ul className="flex gap-8 flex-wrap justify-center">
      {pokemon.map((x) => (
        <PokemonListItem pokemon={x} />
      ))}
    </ul>
  );
};

export default PokemonList;
