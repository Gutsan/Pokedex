import { BadgeType } from './BadgeType'
import { colorFromType } from '../logic/const';

export const PokemonCard = ({name, type, imgFront}) => {
  const colorType=colorFromType[type]
  console.log(colorType[0])
  const FORMAT_CLASS=`cardPokemon w-48 h-80 p-5 rounded-lg flex flex-col justify-around items-center ${colorType[0]} shadow-md`
  return (
    <div className={FORMAT_CLASS}>
      <h2 className="text-xl">{name.toUpperCase()}</h2>
      <BadgeType type={type.toLowerCase()} color={colorType[1]}/>
      <img className="" src={imgFront} alt="imagen de pokemon" />
    </div>
  );
};
