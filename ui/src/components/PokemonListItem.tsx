import React from 'react';
import { Pokemon } from 'pokenode-ts';
import { useNavigate } from 'react-router-dom';

interface PokemonListItemProps {
  pokemon: Pokemon;
}
const PokemonListItem: React.FC<PokemonListItemProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/pokemon/${pokemon.name}`);

  return (
    <li
      className="rounded-lg shadow-lg p-2 flex flex-col gap-2 bg-white border border-gray-200 cursor-pointer"
      onClick={handleClick}
    >
      {!!pokemon.sprites.front_default && (
        <img className="w-28" src={pokemon.sprites.front_default} alt={pokemon.name + '-image'} />
      )}

      <p className="w-full justify-center text-center text-black">{pokemon.name}</p>
    </li>
  );
};

export default PokemonListItem;
