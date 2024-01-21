import PokemonList from '@/components/PokemonList.tsx';
import { useRecoilValue, useRecoilState } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import currentPageAtom from '@/atoms/currentPage.atom.ts';
import { useQuery } from 'react-query';
import Button from '@/components/buttons/Button.tsx';

function HomeView() {
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const [page, setPage] = useRecoilState(currentPageAtom);
  const { data, isFetching } = useQuery(
    ['pokemon-list', page],
    async () => {
      const offset = page > 0 ? page * 12 : 0;
      const { next, results } = await pokemonClient.listPokemons(offset, 12);
      const pokemon = await Promise.all(results.map((x) => pokemonClient.getPokemonByName(x.name)));
      return {
        results: pokemon,
        next
      };
    },
    {
      keepPreviousData: true
    }
  );

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
    <div className="flex justify-center w-full">
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex justify-end items-center">
          <div className="flex gap-4">
            <Button
              label="Prev"
              onClick={handlePreviousPageClick}
              disabled={page <= 1 || isFetching}
            />
            <Button
              label="Next"
              onClick={handleNextPageClick}
              disabled={!data?.next || isFetching}
            />
          </div>
        </div>
        <PokemonList pokemon={data?.results ?? []} />
      </div>
    </div>
  );
}

export default HomeView;
