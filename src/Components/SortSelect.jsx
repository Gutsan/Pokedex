import { IconSortDescending2 } from "@tabler/icons-react";
import { useContext } from "react";
import { FilterContext } from "../Context/filter";
export const SortSelect = () => {
  const {setSortType}=useContext(FilterContext)
  const handleOrderChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="flex h-10 relative  ">
      <IconSortDescending2 className="absolute inset-y-0 left-0 flex items-center pl-2 h-10 text-slate-400" />
      <select
        onChange={handleOrderChange}
        className=" bg-white text-slate-400  border-b-2 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:text-slate-900 sm:text-sm"
      >
        <option value="number">Numero</option>
        <option value="Alphabetic">A-Z</option>
      </select>
    </div>
  );
};
