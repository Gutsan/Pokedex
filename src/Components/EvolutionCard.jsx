import { BadgeType } from './BadgeType'
import { colorFromType } from '../logic/const';
import { usePokemon } from '../hooks/PokemonHook';
import { useNavigate } from 'react-router-dom';

export const EvolutionCard = ({pokemon}) => {
 const ENDPOINT=`https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const {name, type, imgFront,id}=usePokemon(ENDPOINT)
  const colorType=colorFromType[type]
  const FORMAT_CLASS=`cardPokemon transition-all  w-40 h-40 p-5 rounded-lg flex flex-col justify-around items-center ${colorType[0]} shadow-md`
  const navigate=useNavigate()
  const altImg= `Imagen de ${name}`
const handlerClick=(e)=>{
    const ruta=`/Pokemon/${id}`
    navigate(ruta)
}

  return (
    <div className={FORMAT_CLASS} onClick={handlerClick}>

      <BadgeType type={type.toLowerCase()} color={colorType[1]}/>
      <div className='w-1/2 h-full '>
      <img className="w-full h-full" src={imgFront} alt={altImg} />
      </div>
    </div>
  );
};
