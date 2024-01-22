import PokemonDetail from '@/components/PokemonDetail.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function DetailView() {
  const { name } = useParams();
  const pokemonClient = useRecoilValue(pokemonClientAtom);

  const { data, isFetching } = useQuery(
    ['pokemon', name],
    async () => {
      const pokemon = await pokemonClient.getPokemonByName(name);
      return pokemon;
    },
    {
      keepPreviousData: true
    }
  );

  return !isFetching && <PokemonDetail pokemon={data ?? {}} />;
}

export default DetailView;
