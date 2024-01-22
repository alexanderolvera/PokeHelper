import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import favoritesAtom from '@/atoms/favorites.atom.ts';
import { useMutation } from 'react-query';
import { FavoritesService } from '@/services/api';
import toast from 'react-hot-toast';
import { Heart } from 'lucide-react';

interface FavoriteActionProps {
  pokemonName: string;
  isFavorite: boolean;
}

const FavoriteAction: React.FC<FavoriteActionProps> = ({ pokemonName, isFavorite }) => {
  const setFavorites = useSetRecoilState(favoritesAtom);
  const currentUserId = useRecoilValue(currentUserIdAtom);

  const mutation = useMutation({
    mutationFn: async () => {
      try {
        if (isFavorite) {
          await FavoritesService.deleteApiFavorites(pokemonName, currentUserId);
        } else {
          await FavoritesService.postApiFavorites(pokemonName, currentUserId);
        }

        toast.success(
          `Pokemon '${pokemonName}' was ${isFavorite ? 'removed from' : 'added to'} favorites`
        );
      } catch (e) {
        toast.error(`Failed to ${isFavorite ? 'remove from' : 'add to'} favorites`);
      }
    },
    onSuccess: () => {
      if (isFavorite) {
        setFavorites((favorites) => favorites.filter((favorite) => favorite !== pokemonName));
      } else {
        setFavorites((favorites) => [...favorites, pokemonName]);
      }
    }
  });

  const handleFavoriteClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    mutation.mutate();
  };

  return (
    <div onClick={handleFavoriteClick} className="cursor-pointer">
      {isFavorite ? <Heart color="red" fill="red" /> : <Heart color="gray" />}
    </div>
  );
};

export default FavoriteAction;
