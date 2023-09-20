export const formattingID=(IDPoke)=>{
    if (IDPoke.toString().length===1){
        return "#00"+ IDPoke.toString()
      }else if(IDPoke.toString().length===2){
        return "#0"+ IDPoke.toString()
      }else{
        return "#"+ IDPoke.toString()
      }
}