import { sortPokemon } from "./function";

export const getSearchByName = async (ENDPOINT, searchValue, setDataRequestPokemon,sortType) => {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    const arrayFilter = await data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    sortPokemon(sortType, arrayFilter)
    setDataRequestPokemon(arrayFilter)
    
  } catch (error) {

    console.log(ENDPOINT)
    console.log(error)
  }
};

