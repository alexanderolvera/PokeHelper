import PokemonDetail from '@/components/PokemonDetail.tsx';
import { useRecoilValue } from 'recoil';
import pokemonClientAtom from '@/atoms/pokemonClient.atom.ts';
import favoritesAtom from '@/atoms/favorites.atom.ts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function DetailView() {
  const { name } = useParams();
  const pokemonClient = useRecoilValue(pokemonClientAtom);
  const favorites = useRecoilValue(favoritesAtom);

  const { data, isFetching } = useQuery(['pokemon-detail', name], async () => {
    const pokemon = await pokemonClient.getPokemonByName(name);
    return pokemon;
  });

  const isFavorite = favorites.includes(name);

  return !isFetching && <PokemonDetail pokemon={data ?? {}} isFavorite={isFavorite} />;
}

export default DetailView;
