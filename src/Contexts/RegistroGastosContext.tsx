import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import api from "../services/api";

interface IRegistroGastosChildren {
  children: ReactNode;
}

export interface IGastos {
  description: string;
  type: string;
  category: string;
  value: number;
  date: Date;
  userId: number;
  id: number;
}

interface IRegistroGastosContext {
  gastos: IGastos[];
  carregaGastos: () => Promise<void>;
  setGastos: Dispatch<SetStateAction<never[]>>;
}

export const RegistroGastosContext = createContext<IRegistroGastosContext>(
  {} as IRegistroGastosContext
);

export function RegistroGastosProvider({ children }: IRegistroGastosChildren) {
  const [gastos, setGastos] = useState([]);

  async function carregaGastos() {
    const token = localStorage.getItem("@the-cost:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const data = await api.get("/data");
      console.log(data)
      const { data: Gastos } = data;

      setGastos(Gastos);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    carregaGastos();
  }, []);

  return (
    <RegistroGastosContext.Provider
      value={{ carregaGastos, gastos, setGastos }}
    >
      {children}
    </RegistroGastosContext.Provider>
  );
}
