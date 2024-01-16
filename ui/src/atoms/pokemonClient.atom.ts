import { atom } from 'recoil';
import { PokemonClient } from 'pokenode-ts';

const pokemonClientAtom = atom({
  key: 'pokemon-client',
  default: new PokemonClient()
});

export default pokemonClientAtom;
