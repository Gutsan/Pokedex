export const Searcher = ({setSearchValue}) => {
  const handlerInputChange = (e) => {
    setSearchValue(e.target.value);
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
