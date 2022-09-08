import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface IRegistroGastosChildren {
  children: ReactNode;
}

export interface IGastos {
  description: string;
  type: string;
  category: string;
  value: number;
  date: string;
  userId: number;
  id: number;
}

interface IRegistroGastosContext {
  gastos: IGastos[];
  carregaGastos: () => Promise<void>;
  setGastos: Dispatch<SetStateAction<never[]>>;
  temGastos: boolean;
  despesa: number;
  receita: number;
  deletaGasto(id: number): Promise<void>;
}

export const RegistroGastosContext = createContext<IRegistroGastosContext>(
  {} as IRegistroGastosContext
);

export function RegistroGastosProvider({ children }: IRegistroGastosChildren) {
  const [gastos, setGastos] = useState([]);
  const [temGastos, setTemGastos] = useState(false);
  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);

  async function carregaGastos() {
    const token = localStorage.getItem("@the-cost:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const data = await api.get("/data");
      const { data: Gastos } = data;
      setGastos(Gastos);
      if (Gastos.length !== 0) {
        console.log("calculou gastos");
        let arrayDespesas = Gastos.filter(
          (gasto: IGastos) => gasto.type === "Despesas"
        );
        let arrayReceitas = Gastos.filter(
          (gasto: IGastos) => gasto.type === "Receitas"
        );

        setReceita(
          arrayReceitas.reduce(function (soma: number, atual: IGastos) {
            return soma + atual.value;
          }, 0)
        );
        console.log(receita);
        setDespesa(
          arrayDespesas.reduce(function (soma: number, atual: IGastos) {
            return soma + atual.value;
          }, 0)
        );

        setTemGastos(true);
      } else {
        setTemGastos(false);
      }
    } catch (error) {
      setTemGastos(false);
      console.error(error);
    }
  }

  async function deletaGasto(id: number) {
    api
      .delete(`data/${id}`)
      .then(() => {
        carregaGastos();
        toast.success("Registro deletado com sucesso.");
      })
      .catch((error) => toast.error("ops, ocorreu um erro."));
  }

  useEffect(() => {
    console.log("gastos");
    console.log(temGastos);
    carregaGastos();
  }, []);

  return (
    <RegistroGastosContext.Provider
      value={{
        carregaGastos,
        gastos,
        setGastos,
        temGastos,
        despesa,
        receita,
        deletaGasto,
      }}
    >
      {children}
    </RegistroGastosContext.Provider>
  );
}
