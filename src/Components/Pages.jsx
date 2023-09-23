
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { ROUNDUP } from "../logic/function";
import { useContext } from "react";
import { PageContext } from "../Context/paginado";

export const ModfPage = ({dataListPokemon}) => {
  const {RenderPage, setRenderPage} = useContext(PageContext)
  
  //Manejo de cambio de pagina renderizada, Round se utiliza para cambiar limites de pagina
  const handleClickMas = () => {
    const newRenderPage = RenderPage + 1;
    if (
      newRenderPage > 0 &&
      ROUNDUP(dataListPokemon.length, 12) >= newRenderPage
    ) {
      setRenderPage(newRenderPage);
    }
  };
  const handleClickMenos = () => {
    const newRenderPage = RenderPage - 1;
    if (
      newRenderPage > 0 &&
      ROUNDUP(dataListPokemon.length, 12) >= newRenderPage
    ) {
      setRenderPage(newRenderPage);
    } 
  };
  
  
  
  return ( 
    <div className="z-50 flex rounded-full shadow-md w-40 justify-between mt-6 text-slate-400 hover:border hover:border-b-2 hover:border-sky-500 hover:text-sky-500">
      <button value={1} className="align-middle" onClick={handleClickMenos}>
        <IconChevronLeft />
      </button>
      <p className="">
        {RenderPage}
        </p>
      <button value={-1} className="align-middle" onClick={handleClickMas}>
        <IconChevronRight />
      </button>
    </div>
  );
};
