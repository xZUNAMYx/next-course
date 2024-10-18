'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './';
import { setFavoritePokemon } from './pokemons/pokemons';

interface Props{
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}');
    store.dispatch( setFavoritePokemon(favorites) );
  }, []);

  return (
    <Provider store={ store }>
        { children }
    </Provider>
  )
}
