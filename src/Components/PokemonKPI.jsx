export const PokemonKpi = ({ name, kpi, color }) => {
  const CLASSNAME = `text-2xl ${color}`;
  return (
    <div className="flex flex-col w-1/3 items-center">
      <h3>{name}</h3>
      <h3 className={CLASSNAME}>{kpi}</h3>
    </div>
  );
};
