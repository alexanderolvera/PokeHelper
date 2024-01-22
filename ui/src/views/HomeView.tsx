import PokemonList from '@/components/PokemonList.tsx';
import { useRecoilValue, useRecoilState } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import currentPageAtom from '@/atoms/currentPage.atom.ts';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import { useQuery } from 'react-query';
import Button from '@/components/buttons/Button.tsx';
import { FavoritesService } from '@/services/api';

function HomeView() {
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const [page, setPage] = useRecoilState(currentPageAtom);
  const currentUserId = useRecoilValue(currentUserIdAtom);

  const { data, isFetching } = useQuery(
    ['pokemon-list', page],
    async () => {
      const offset = page > 0 ? page * 12 : 0;
      const { next, results } = await pokemonClient.listPokemons(offset, 12);
      const pokemon = await Promise.all(results.map((x) => pokemonClient.getPokemonByName(x.name)));
      return {
        results: pokemon,
        next,
        checkPageFavorites: page
      };
    },
    {
      keepPreviousData: true
    }
  );

  const { data: favorites, isFetching: isFetchingFavorites } = useQuery({
    queryKey: ['favorites', data?.checkPageFavorites],
    queryFn: async () => {
      const result = await FavoritesService.getApiFavorites(
        data?.results.map((x) => x.name),
        currentUserId
      );
      return result;
    },
    enabled: !!currentUserId && !!data?.checkPageFavorites,
    staleTime: Infinity
  });

  const handlePreviousPageClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPageClick = () => {
    if (data?.next) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center">
        <div className="flex gap-4">
          <Button
            label="Prev"
            onClick={handlePreviousPageClick}
            disabled={page <= 1 || isFetching || isFetchingFavorites}
          />
          <Button
            label="Next"
            onClick={handleNextPageClick}
            disabled={!data?.next || isFetching || isFetchingFavorites}
          />
        </div>
      </div>
      {!isFetching && !isFetchingFavorites && (
        <PokemonList pokemon={data?.results ?? []} favorites={favorites ?? []} />
      )}
    </>
  );
}

export default HomeView;
