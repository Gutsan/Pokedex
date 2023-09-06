
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