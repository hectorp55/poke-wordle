import { useQuery } from '@tanstack/react-query';

async function fetchPokemonNames() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0');
  if (!response.ok) {
    throw new Error('Poke response was not ok');
  }
  const data = await response.json();
  const filteredNames = data.results.filter((pokemon) => pokemon.name.length == 5); // TODO: make this dynamic;
  const names = Object.fromEntries(
    filteredNames.map(pokemon => [pokemon.name.toUpperCase(), pokemon.name.length])
  );
  
  return { randomPokemon: getRandomPokemon(names), pokemon: names }

  return names;
}

export const getPokemonNames = () => {
    return useQuery({
        queryKey: ['pokemonnames'], // Unique key for this query
        queryFn: fetchPokemonNames, // Function to fetch data
    });
}

export const getRandomPokemon = (names) => {
  // Get keys
  const keys = Object.keys(names);

  // Generate a random key
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];

  // Get the random element
  return randomKey.toUpperCase();
}