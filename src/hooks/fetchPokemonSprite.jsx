import { useQuery } from '@tanstack/react-query';

async function fetchPokemonSprite({queryKey}) {
    const [_, pokemonName] = queryKey;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
        throw new Error('Poke response was not ok');
    }
    const data = await response.json();

    return data.sprites;
}

export const getPokemonSprite = (pokemonName) => {
    return useQuery({
        queryKey: ['pokemonsprite', pokemonName], // Unique key for this query
        queryFn: fetchPokemonSprite, // Function to fetch data
        enabled: !!pokemonName,
    });
}