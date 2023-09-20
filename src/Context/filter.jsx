import { createContext,useState } from "react";

export const FilterContext=createContext()
export function FilterPovider ({children}){
    const [searchValue, setSearchValue] = useState("");
    const [sortType,setSortType]=useState("number")
    return(
    <FilterContext.Provider value={{
        searchValue,
        setSearchValue,
        sortType,
        setSortType,
    }}>
        {children}
    </FilterContext.Provider>
    )
}