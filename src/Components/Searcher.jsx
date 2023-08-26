export const Searcher=({setSearchType,setSearchValue})=>{
    const handlerChange=(e)=>{  
        setSearchType(e.target.value)
    }
    const handlerInputChange=(e)=>{  
        setSearchValue(e.target.value)
    }
    return(
        <div className="flex h-5">
            <input type="text" placeholder="Buscar Pokemon" onChange={handlerInputChange} />
                <select name="searchType" id="searchType" onChange={handlerChange}>
                <option value="name">Nombre</option>
                <option value="type">Tipo</option>
            </select>
        </div>
    )
}