import React from 'react';
import { useRecoilValue } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import LoginButton from '@/components/buttons/LoginButton.tsx';
import LogoutButton from '@/components/buttons/LogoutButton.tsx';
import FavoritesButton from '@/components/buttons/FavoritesButton.tsx';
import SeeAllButton from '@/components/buttons/SeeAllButton.tsx';

const Navbar: React.FC = () => {
  const currentUserId = useRecoilValue(currentUserIdAtom);
  return (
    <div className="bg-blue-400 w-full h-14 p-2 flex items-center justify-between">
      <p className="text-3xl text-white">PokeList</p>
      <div>
        <SeeAllButton />
        {currentUserId ? (
          <>
            <FavoritesButton />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
