import { sortPokemon } from "./function";


export const getListFromApi = async (qty=12, searchValue, sortType) => {
  const ENDPOINT = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${qty}`;
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    const listPokemon = await data.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    sortPokemon(sortType, listPokemon)
    return listPokemon
  } catch (error) {

    console.log(ENDPOINT)
    console.log(error)
  }
};