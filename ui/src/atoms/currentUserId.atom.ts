import { atom } from 'recoil';

const currentUserIdAtom = atom<string | null>({
  key: 'current-user',
  default: null
});

export default currentUserIdAtom;
