import { colorFromType } from "../logic/const";
import { BadgeType } from "./BadgeType";
export const Navbar = () => {
  const types = Object.keys(colorFromType);

  return (
    <nav className="w-1/3 flex flex-col gap-3 items-center">
      <h2 className="w-full">Filtrar por Tipo</h2>
      <div className="flex flex-wrap gap-5 w-20">
        {types.map((type) => (
          <BadgeType type={type.toLowerCase()} color={colorFromType[type][1]} />
        ))}
      </div>
    </nav>
  );
};
