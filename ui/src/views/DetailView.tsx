import PokemonDetail from '@/components/PokemonDetail.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import { useQuery } from 'react-query';
import { FavoritesService } from '@/services/api';
import { useParams } from 'react-router-dom';

function DetailView() {
  const { name } = useParams();
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const currentUserId = useRecoilValue(currentUserIdAtom);

  const { data, isFetching } = useQuery(
    ['pokemon-detail', name],
    async () => {
      const favorites = currentUserId
        ? await FavoritesService.getApiFavorites(null, currentUserId)
        : [];
      const pokemon = await pokemonClient.getPokemonByName(name);

      return {
        pokemon,
        isFavorite: favorites.includes(name)
      };
    },
    {
      staleTime: Infinity
    }
  );

  return (
    !isFetching && <PokemonDetail pokemon={data?.pokemon ?? {}} isFavorite={data?.isFavorite} />
  );
}

export default DetailView;
