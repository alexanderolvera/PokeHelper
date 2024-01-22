import React from 'react';
import { Pokemon } from 'pokenode-ts';
import { useRecoilValue } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import FavoriteAction from '@/components/FavoriteAction.tsx';

interface PokemonDetailProps {
  pokemon: Pokemon;
  isFavorite: boolean;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, isFavorite }) => {
  const currentUserId = useRecoilValue(currentUserIdAtom);

  const getTypeBadgeColor = (type: string): string => {
    if (type === 'normal') return 'bg-gray-300 text-gray-800';
    if (type === 'fire') return 'bg-red-500 text-white';
    if (type === 'water') return 'bg-blue-500 text-white';
    if (type === 'grass') return 'bg-green-500 text-white';
    if (type === 'electric') return 'bg-yellow-500 text-gray-800';
    if (type === 'ice') return 'bg-blue-200 text-gray-800';
    if (type === 'fighting') return 'bg-red-700 text-white';
    if (type === 'poison') return 'bg-purple-500 text-white';
    if (type === 'ground') return 'bg-yellow-700 text-white';
    if (type === 'flying') return 'bg-blue-300 text-gray-800';
    if (type === 'psychic') return 'bg-purple-400 text-white';
    if (type === 'bug') return 'bg-green-600 text-white';
    if (type === 'rock') return 'bg-gray-600 text-white';
    if (type === 'ghost') return 'bg-indigo-500 text-white';
    if (type === 'dark') return 'bg-gray-800 text-white';
    if (type === 'steel') return 'bg-gray-500 text-white';
    if (type === 'fairy') return 'bg-pink-300 text-gray-800';
    return 'bbg-gray-300 text-gray-800';
  };

  const getStatBarColor = (statName) => {
    if (statName === 'hp') return 'bg-red-500';
    if (statName === 'attack') return 'bg-yellow-500';
    if (statName === 'defense') return 'bg-green-500';
    if (statName === 'special-attack') return 'bg-blue-500';
    if (statName === 'special-defense') return 'bg-indigo-500';
    if (statName === 'speed') return 'bg-purple-500';
    return 'bg-gray-300';
  };

  const getWidthClass = (value: number): string => {
    if (value < 8.333333) return 'w-1/12';
    if (value < 16.666667) return 'w-1/6';
    if (value < 20) return 'w-1/5';
    if (value < 25) return 'w-1/4';
    if (value < 33.333333) return 'w-1/3';
    if (value < 40) return 'w-2/5';
    if (value < 41.666667) return 'w-5/12';
    if (value < 50) return 'w-1/2';
    if (value < 58.333333) return 'w-7/12';
    if (value < 60) return 'w-3/5';
    if (value < 66.666667) return 'w-2/3';
    if (value < 75) return 'w-3/4';
    if (value < 80) return 'w-4/5';
    if (value < 83.333333) return 'w-5/6';
    if (value < 91.666667) return 'w-11/12';
    return 'w-100';
  };

  return (
    <li className="rounded-lg shadow-lg p-3 flex flex-col gap-2 bg-white border border-gray-200 items-center">
      <div
        className={`flex flex-row w-1/2 items-center ${
          currentUserId ? 'justify-between' : 'justify-center'
        }`}>
        <h2 className="text-2xl font-semibold text-center text-black">{pokemon.name}</h2>
        {currentUserId && <FavoriteAction pokemonName={pokemon.name} isFavorite={isFavorite} />}
      </div>

      {!!pokemon.sprites.front_default && (
        <div className="flex justify-center">
          <img className="w-48" src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
        </div>
      )}

      <div className="mt-4 flex flex-col md:gap-5 md:flex-row md:justify-between">
        <div className="mb-2 md:mb-0">
          <strong>Height:</strong> {pokemon.height}
        </div>
        <div className="mb-2 md:mb-0">
          <strong>Weight:</strong> {pokemon.weight}
        </div>
        <div className="mb-2 md:mb-0">
          <strong>Base experience:</strong> {pokemon.base_experience}
        </div>
      </div>

      <div className="mt-4 flex flex-col md:gap-20 md:flex-row md:justify-between">
        <div className="mb-2 md:mb-0">
          <strong>Types:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {pokemon.types.map((x) => (
              <span
                key={x.type.name}
                className={`rounded-full px-2 py-1 text-sm text-gray-700 ${getTypeBadgeColor(
                  x.type.name
                )}`}>
                {x.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-2 mt-5 md:mt-0 md:mb-0">
          <strong>Abilities:</strong>
          <ul className="list-disc ml-4 md:ml-6">
            {pokemon.abilities.map((x) => (
              <li key={x.ability.name}>{x.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-col w-full items-center">
        <strong>Stats:</strong>
        <ul className="list-none ml-0 w-3/4">
          {pokemon.stats.map((x) => (
            <li key={x.stat.name} className="flex flex-col md:flex-row md:items-center mb-2">
              <strong className="w-1/4 mr-2 md:text-right">{x.stat.name}:</strong>
              <div className="w-3/4 h-3 rounded-full">
                <div
                  className={`h-full rounded-full ${getStatBarColor(x.stat.name)} ${getWidthClass(
                    x.base_stat
                  )}`}></div>
              </div>
              <span className="md:ml-2">{x.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PokemonDetail;
