
export const ROUNDUP=(num,div)=>{
    const integer=Math.trunc(num/div)
    const rest=num%div
    const result=integer+(rest>0?1:0)   
    return result
}

export const getIdForEndPoint=(stringEnpoint)=>{
stringEnpoint.split("/")[stringEnpoint.split("/").length-2]
}