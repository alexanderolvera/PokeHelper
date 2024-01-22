import React from 'react';
import { useRecoilValue } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import { useMutation, useQueryClient } from 'react-query';
import { FavoritesService } from '@/services/api';
import toast from 'react-hot-toast';
import { Heart } from 'lucide-react';

interface FavoriteActionProps {
  pokemonName: string;
  isFavorite: boolean;
}

const FavoriteAction: React.FC<FavoriteActionProps> = ({ pokemonName, isFavorite }) => {
  const currentUserId = useRecoilValue(currentUserIdAtom);
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    }
  });

  const handleFavoriteClick = (e) => {
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
