import { BadgeType } from './BadgeType'
import { colorFromType } from '../logic/const';
import { formattingID } from '../logic/idpoke';
import { usePokemon } from '../hooks/PokemonHook';
import { useNavigate } from 'react-router-dom';

export const PokemonCard = ({endpoint}) => {
  const {name, type, imgFront,id}=usePokemon(endpoint)
  const {colorBg1,colorBg2,textColor}=colorFromType[type]
  const FORMAT_CLASS=`cardPokemon transition-all  w-80 h-40 p-5 rounded-lg flex justify-around items-center ${colorBg1} shadow-md hover:opacity-80 cursor-pointer`
  const navigate=useNavigate()

  const handlerClick=(e)=>{
    const ruta=`${id}`
    navigate(ruta)
}

  return (
    <div className={FORMAT_CLASS} onClick={handlerClick}>
      <div className='flex flex-col'>
        <p>{formattingID(id)}</p>
      <h2 className="text-xl">{name.toUpperCase()}</h2>
      <BadgeType type={type.toLowerCase()} color={colorBg2}/>
      </div>
      <div className='w-1/2 h-full '>
      <img className="w-full h-full" src={imgFront} alt="imagen de pokemon" />
      </div>
    </div>
  );
};
