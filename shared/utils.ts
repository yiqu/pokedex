export function getPokemonListUrl(offset: number, limit: number) {
  return `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
}