import { BadgeType } from './BadgeType'
import { colorFromType } from '../logic/const';
import { useEffect } from 'react';





export const ViewPokemon = ({pokemon}) => {
    
  useEffect({},[])
  
  const colorType=colorFromType[type]
  const FORMAT_CLASS=`cardPokemon transition-all min-w-full max-w-11/12 h-40 p-5 rounded-lg flex justify-around items-center ${colorType[0]} shadow-md`
  
  if (idPoke.toString().length===1){
    idPoke="#00"+ idPoke.toString()
  }else if(idPoke.toString().length===2){
    idPoke="#0"+ idPoke.toString()
  }else{
    idPoke="#"+ idPoke.toString()
  }
  return (
    <div className={FORMAT_CLASS}>
      <div className='flex flex-col'>
        <p>{idPoke}</p>
      <h2 className="text-xl">{name.toUpperCase()}</h2>
      <BadgeType type={type.toLowerCase()} color={colorType[1]}/>
      </div>
      <div className='w-1/2 h-full '>
      <img className="w-full h-full" src={imgFront} alt="imagen de pokemon" />
      </div>
    </div>
  );
};