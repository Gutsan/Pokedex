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
  const {colorBg1,colorBg2,textColor} = colorFromType[type];
  const {curiosities,evolutionsURL} =useSpecie(idPoke)
  const {nameEvolutions}=useEvolutions(evolutionsURL)
  const CLASSNAME_TITULO=`text-3xl ${textColor}`
  const CLASSNAME_TITULO2=`text-2xl ${textColor}`
  const altImg= `Imagen de ${name}`
  return (
    <div className="flex justify-center item-center flex-wrap w-full min-h-max text-white">
      <section className="w-1/4 min-w-[300px] min-h-max flex flex-col items-center justify-center my-5">
        <img className="w-11/12 max-h-max" src={imgFront} alt={altImg} />
        <section className="flex flex-wrap gap-5">
        <PokemonKpi name="Altura" kpi={height} color={textColor}/>
        <PokemonKpi name="Peso" kpi={weight} color={textColor}/>
        <PokemonKpi name="Experiencia" kpi={base_experience} color={textColor}/>
        </section>
      </section>
      <section className="w-2/4 min-w-[0px] min-h-max flex flex-col i justify-center my-5 gap-3">
        <h1 className={CLASSNAME_TITULO}>{name.toUpperCase()} <span>#{id}</span></h1>
        <p className="">{curiosities}</p>
        <div className="text-slate-800">
        <BadgeType type={type.toLowerCase()} color={colorBg2}/>
        </div>
        <div className="flex flex-col">
        {stats.map(((stat,index)=>
          <BarStats key={index} name={stat.stat.name} value={stat.base_stat} color={colorBg2}/>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={CLASSNAME_TITULO2}>Evoluciones</h2>
          <div className="flex gap-5 flex-wrap">
            {nameEvolutions.map((nameEvolu,index)=>{
              return <EvolutionCard key={index} pokemon={nameEvolu}/>
            })}
          </div>
        </div>
      </section>
      <section className="w-full text-right px-10 pb-5">
        <Link to="/pokemon">
          Volver
        </Link>
      </section>
    </div>
  );
};
