import { atom } from 'recoil';

const currentPageAtom = atom<string | null>({
  key: 'current-page',
  default: 1
});

export default currentPageAtom;
