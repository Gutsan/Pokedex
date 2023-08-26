export const Searcher = ({setSearchValue,setRenderPage}) => {
  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
    setRenderPage(1)
  };
  return (
    <div className="flex h-5">
      <input
        type="text"
        placeholder="Buscar Pokemon"
        onChange={handlerInputChange}
      />
    </div>
  );
};
