'use client'

// import React, { useEffect, useState } from 'react';
import { PokemonGrid } from './PokemonGrid';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector( state => Object.values(state.pokemonsFavorites.favorites) );
    // const [ pokemons, setPokemons ] = useState( favoritePokemons );

    // useEffect(() => {
    //     // setPokemons( favoritePokemons );
    // }, [favoritePokemons]);

    return (
       <>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonGrid pokemons={ favoritePokemons } />)
            }
       </> 
    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] justify-center items-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}
