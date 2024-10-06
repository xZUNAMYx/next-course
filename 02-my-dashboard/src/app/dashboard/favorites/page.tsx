import { PokemonGrid } from "@/components/PokemonGrid";
// import { notFound } from "next/navigation";

export const metadata = {
    title: 'Favoritos',
    description: 'Listado de pokemons favoritos',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-2xl font-bold text-center">Pokemones favoritos <small>Global state</small></span>
            
            <PokemonGrid pokemons={ [] } />

        </div>
    );
}