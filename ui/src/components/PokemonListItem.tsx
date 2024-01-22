import React from 'react';
import { Pokemon } from 'pokenode-ts';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import FavoriteAction from '@/components/FavoriteAction.tsx';

interface PokemonListItemProps {
  pokemon: Pokemon;
  isFavorite: boolean;
}
const PokemonListItem: React.FC<PokemonListItemProps> = ({ pokemon, isFavorite }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/pokemon/${pokemon.name}`);
  const currentUserId = useRecoilValue(currentUserIdAtom);

  return (
    <li
      className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white border border-gray-200 cursor-pointer"
      onClick={handleClick}
    >
      {currentUserId && (
        <div className="flex justify-end items-center">
          <FavoriteAction pokemonName={pokemon.name} isFavorite={isFavorite} />
        </div>
      )}

      {!!pokemon.sprites.front_default && (
        <img className="w-28" src={pokemon.sprites.front_default} alt={pokemon.name + '-image'} />
      )}

      <p className="w-full justify-center text-center text-black">{pokemon.name}</p>
    </li>
  );
};

export default PokemonListItem;
