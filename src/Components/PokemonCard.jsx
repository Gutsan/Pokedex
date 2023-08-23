export const PokemonCard = ({name, type, imgFront}) => {
  return (
    <div className="cardPokemon w-48 h-80 p-5
    border-solid border rounded-lg
    flex flex-col justify-around items-center 
    bg-amber-200">
      <h2 className="text-xl	">{name.toUpperCase()}</h2>
      <h3>{type.toUpperCase()}</h3>
      <img src={imgFront} alt="imagen de pokemon" />
    </div>
  );
};
