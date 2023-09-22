import { useEvolutions, usePokemon, useSpecie } from "../hooks/PokemonHook";
import { Link, useParams } from "react-router-dom";
import { colorFromType } from "../logic/const";
import { BadgeType } from "../Components/BadgeType";
import { PokemonKpi } from "../Components/PokemonKPI";
import { BarStats } from "../Components/BarStats";
import { EvolutionCard } from "../Components/EvolutionCard";
export const PokemonPage = () => {
  const { idPoke } = useParams();
  const ENDPOINT_POKEMON = `https://pokeapi.co/api/v2/pokemon/${idPoke}`;
  const { name, type, imgFront, id,height,weight,base_experience,stats} = usePokemon(ENDPOINT_POKEMON);
  const colorType = colorFromType[type];
  const {curiosities,evolutionsURL} =useSpecie(idPoke)
  const {nameEvolutions}=useEvolutions(evolutionsURL)
  const CLASSNAME_TITULO=`text-3xl text-${colorType[2]}`
  const CLASSNAME_TITULO2=`text-2xl text-${colorType[2]}`
  const altImg= `Imagen de ${name}`
  return (
    <div className="flex justify-center w-full min-h-max">
      <section className="w-1/4 min-h-max flex flex-col items-center justify-center my-5">
        <img className="w-11/12" src={imgFront} alt={altImg} />
        <section className="flex flex-wrap gap-5 text-white">
        <PokemonKpi name="Height" kpi={height} color={colorType[2]}/>
        <PokemonKpi name="Weight" kpi={weight} color={colorType[2]}/>
        <PokemonKpi name="Experiencia" kpi={base_experience} color={colorType[2]}/>
        </section>
      </section>
      <section className="w-2/4 min-h-max flex flex-col i justify-center my-5 gap-3">
        <h1 className={CLASSNAME_TITULO}>{name.toUpperCase()} <span>#{id}</span></h1>
        <p className="text-white">{curiosities}</p>
        <BadgeType type={type.toLowerCase()} color={colorType[1]}/>
        <div className="flex flex-col">
        {stats.map(((stat,index)=>
          <BarStats key={index} name={stat.stat.name} value={stat.base_stat} color={colorType[2]}/>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={CLASSNAME_TITULO2}>Evoluciones</h2>
          <div className="flex gap-5">
            {nameEvolutions.map((nameEvolu,index)=>{
              return <EvolutionCard key={index} pokemon={nameEvolu}/>
            })}
          </div>
        </div>
      </section>
      <section>
        <Link to="/pokemon">
          Volver
        </Link>
      </section>
    </div>
  );
};
