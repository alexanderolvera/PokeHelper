import PokemonList from '@/components/PokemonList.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import { useQuery } from 'react-query';
import { FavoritesService } from '@/services/api';

function FavoritesView() {
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const currentUserId = useRecoilValue(currentUserIdAtom);

  const { data, isFetching } = useQuery(
    ['favorites'],
    async () => {
      const favorites = await FavoritesService.getApiFavorites(null, currentUserId);
      const pokemon = await Promise.all(favorites.map((x) => pokemonClient.getPokemonByName(x)));

      return { pokemon, favorites };
    },
    {
      staleTime: Infinity,
      enabled: !!currentUserId
    }
  );

  return (
    <>
      {!currentUserId && <p className="text-center">Login to add pokemon to your favorites!</p>}
      {currentUserId && !isFetching && (
        <PokemonList pokemon={data?.pokemon ?? []} favorites={data?.favorites} />
      )}
      {currentUserId && !isFetching && !data?.pokemon?.length && (
        <p className="text-center">Your favorites list is empty, go add some!</p>
      )}
    </>
  );
}

export default FavoritesView;
