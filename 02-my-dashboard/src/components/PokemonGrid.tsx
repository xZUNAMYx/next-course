import { SimplePokemon } from "../pokemons/interfaces/simple-pokemon";
// import Image from "next/image"; // Import the Image component from the appropriate library
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.map( pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>  
                    ))
                }
        </div>
    );
}