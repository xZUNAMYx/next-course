import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    return ( next: Dispatch ) => ( action: Action ) => {
        
        next(action);

        if( action.type === 'pokemonsFavorites/toggleFavorite' ) {
            const { pokemonsFavorites } = state.getState() as RootState;
            localStorage.setItem('favoritePokemons', JSON.stringify(pokemonsFavorites));
            return;
        }
        // console.log(action);
    }
}