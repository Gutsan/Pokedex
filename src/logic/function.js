
export const ROUNDUP=(num,div)=>{
    const integer=Math.trunc(num/div)
    const rest=num%div
    const result=integer+(rest>0?1:0)   
    return result
}

export const getIdForEndPoint=(stringEnpoint)=>{
stringEnpoint.split("/")[stringEnpoint.split("/").length-2]
}

export const sortPokemon=(typeOrder,arrayPokemon)=>{
    if(typeOrder==="Alphabetic"){
      arrayPokemon.sort((a,b)=>{
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      })
    }
}

  // Función para obtener datos de pokemon en api
  export const getInfoPokemon = async (ENDPOINT_POKEMON) => {
    const res = await fetch(ENDPOINT_POKEMON);
    const data = await res.json();
    const imgFront = data.sprites.other.dream_world.front_default;
    const name = data.name;
    const type = data.types[0].type.name;
    const id = data.id;
    return({ name, imgFront, type, id });
  };