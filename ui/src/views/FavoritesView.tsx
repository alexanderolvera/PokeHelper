import PokemonList from '@/components/PokemonList.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import favoritesAtom from '@/atoms/favorites.atom.ts';
import { useQuery } from 'react-query';

function FavoritesView() {
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const currentUserId = useRecoilValue(currentUserIdAtom);
  const favorites = useRecoilValue(favoritesAtom);

  const { data, isFetching } = useQuery(
    ['pokemon-favorites', favorites.length],
    async () => {
      const pokemon = await Promise.all(favorites.map((x) => pokemonClient.getPokemonByName(x)));
      return { pokemon };
    },
    {
      enabled: !!currentUserId
    }
  );

  return (
    <>
      {!currentUserId && <p className="text-center">Login to add pokemon to your favorites!</p>}
      {currentUserId && !isFetching && (
        <PokemonList pokemon={data?.pokemon ?? []} favorites={favorites} />
      )}
      {currentUserId && !isFetching && !data?.pokemon?.length && (
        <p className="text-center">Your favorites list is empty, go add some!</p>
      )}
    </>
  );
}

export default FavoritesView;
