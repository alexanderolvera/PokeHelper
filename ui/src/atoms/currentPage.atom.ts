import { atom } from 'recoil';

const currentPageAtom = atom<number>({
  key: 'current-page',
  default: 1
});

export default currentPageAtom;
