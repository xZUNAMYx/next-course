import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
// import { notFound } from "next/navigation";

const getPokemons = async ( limit= 20, offset= 0 ):Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then( res => res.json() );

    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    // throw new Error('Error al obtener los pokemons que no debería suceder');
    // throw notFound();

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(150);

    return (
        <div className="flex flex-col">

            <span className="text-2xl font-bold text-center">Listado de Pokemons <small>Estáticos</small></span>
            
            <PokemonGrid pokemons={pokemons} />

        </div>
    );
}