export const PokemonCard = ({name, type, imgFront}) => {
  
  return (
    <div className="cardPokemon w-48 h-80 p-5
    rounded-lg
    flex flex-col justify-around items-center 
    bg-amber-200
    shadow-md">
      <h2 className="text-xl">{name.toUpperCase()}</h2>
      <h3>{type.toUpperCase()}</h3>
      <img className="" src={imgFront} alt="imagen de pokemon" />
    </div>
  );
};
