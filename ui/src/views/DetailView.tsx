import { useMemo } from 'react';
import PokemonDetail from '@/components/PokemonDetail.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import favoritesAtom from '@/atoms/favorites.atom.ts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Pokemon } from 'pokenode-ts';

function DetailView() {
  const { name = '' } = useParams();
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const favorites: string[] = useRecoilValue(favoritesAtom);

  const { data, isFetching } = useQuery(
    ['pokemon-detail', name],
    async () => {
      const pokemon = await pokemonClient.getPokemonByName(name);
      return pokemon;
    },
    { refetchOnWindowFocus: false }
  );

  const isFavorite = useMemo(() => favorites.includes(name), [favorites, name]);

  return !isFetching && <PokemonDetail pokemon={data ?? ({} as Pokemon)} isFavorite={isFavorite} />;
}

export default DetailView;
