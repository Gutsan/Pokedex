import { IconSearch } from '@tabler/icons-react';
import { useContext } from 'react';
import { FilterContext } from '../Context/filter';
import { PageContext } from '../Context/paginado';


export const Searcher = () => {
  const {setSearchValue}=useContext(FilterContext)
  const {setRenderPage} = useContext(PageContext)
  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
    setRenderPage(1)
  };
  return (
    <div className="flex h-10 relative  ">
      <IconSearch className='absolute inset-y-0 left-0 flex items-center pl-2 h-10 text-slate-400'/>
      <input
        type="text"
        placeholder="Buscar Pokemon"
        onChange={handlerInputChange}
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  border-b-2 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
    </div>
  );
};
