import PokemonDetail from '@/components/PokemonDetail.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import { useQuery } from 'react-query';
import Button from '@/components/buttons/Button.tsx';
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

  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex justify-end items-center">
          <div className="flex gap-4">
            <Button label="Back" to="/" />
          </div>
        </div>
        {!isFetching && <PokemonDetail pokemon={data} />}
      </div>
    </div>
  );
}

export default DetailView;
