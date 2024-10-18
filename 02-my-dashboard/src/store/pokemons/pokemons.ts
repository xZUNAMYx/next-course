

import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsFavoriteState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsFavoriteState => {
//   // if (typeof window !== 'undefined') {
//     // if ( typeof localStorage === 'undefined' ) return {};

//     const favorites = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}');
//     return favorites;

// }

const initialState: PokemonsFavoriteState = {
  favorites: {},
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur' }, 
  // '4': { id: '4', name: 'nombrepokemos' },
}

const pokemonsSlice = createSlice({
  name: 'pokemonsFavorites',
  initialState,
  reducers: {

    setFavoritePokemon( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO: No se debe hacer en Redux
      localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites));
    }

  }
});

export const { toggleFavorite, setFavoritePokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer