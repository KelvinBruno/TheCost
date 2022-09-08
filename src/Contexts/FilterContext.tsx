import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface IFilterChildren {
  children: ReactNode;
}

interface IFilterContext {
  Tipo: string;
  Categoria: string;
  setTipo: Dispatch<SetStateAction<string>>;
  setCategoria: Dispatch<SetStateAction<string>>;
}

export const FilterContext = createContext<IFilterContext>(
  {} as IFilterContext
);

export function FilterProvider({ children }: IFilterChildren) {
  const [Tipo, setTipo] = useState("");
  const [Categoria, setCategoria] = useState("");

  return (
    <FilterContext.Provider value={{ Tipo, setTipo, Categoria, setCategoria }}>
      {children}
    </FilterContext.Provider>
  );
}
