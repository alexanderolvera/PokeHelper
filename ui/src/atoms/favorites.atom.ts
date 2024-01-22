import { atom } from 'recoil';

const favoritesAtom = atom<string[]>({
  key: 'favorites',
  default: []
});

export default favoritesAtom;
