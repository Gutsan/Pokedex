
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
export const getInfoForApi = async (ENDPOINT_POKEMON) => {
  const res = await fetch(ENDPOINT_POKEMON);
  const data = await res.json();
  return(data)
}
  // Función para obtener datos de pokemon en api
  export const getInfoPokemon = async (ENDPOINT_POKEMON) => {
    const res = await fetch(ENDPOINT_POKEMON);
    const data = await res.json();
    const imgFront = data.sprites.other.dream_world.front_default??data.sprites.other.home.front_default;
    const name = data.name;
    const type = data.types[0].type.name;
    const id = data.id;
    const height=data.height
    const weight=data.weight
    const base_experience=data.base_experience
    const stats=data.stats
    return({ name, imgFront, type, id, height,weight,base_experience,stats});
  };

  export const getInfoSpecies = async (idPokemon) => {
    const ENDPOINT_POKEMON=`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`
    const res = await fetch(ENDPOINT_POKEMON);
    const data = await res.json();
    const evolutionsURL=data.evolution_chain.url
    const curiosities=data.flavor_text_entries.filter((flavor)=>flavor.language.name==="es")
  .map((flavor)=>flavor.flavor_text +"\n").slice(0,3);
    
    return({curiosities,evolutionsURL});
  }; 

  export const getInfoEvolution=async(endpoint)=>{
    const res=await fetch(endpoint)
    const data = await res.json();
    
    let evolution=data.chain.evolves_to

    const nameEvolutions=[]
    nameEvolutions.push(data.chain.species.name)

    while (evolution.length>0){
      evolution.map(evo=>nameEvolutions.push(evo.species.name))
      evolution=evolution[0].evolves_to
    }
    
    return({nameEvolutions})
  }