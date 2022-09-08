import {
  ReactNode,
  useContext,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import Metas from "../components/Metas";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface IMetaChildren {
  children: ReactNode;
}

export interface IMeta {
  objetivo: string;
  value: number;
  done: number;
  userId: number;
  id: number;
}

interface IMetaContext {
  setMetas: Dispatch<SetStateAction<never[]>>;
  metas: IMeta[];
  carregaMeta: () => Promise<void>;
}

export const MetaContext = createContext<IMetaContext>({} as IMetaContext);

export function MetaProvider({ children }: IMetaChildren) {
  const [metas, setMetas] = useState([]);
  const navigate = useNavigate();
  const { setLoading } = useContext(AuthContext);
  const token = localStorage.getItem("@the-cost:token");
  let Metas;

  async function carregaMeta() {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    if (token) {
      try {
        const data = await api.get("/metas");
        const { data: response } = data;
        Metas = response;

        setMetas(Metas);
      } catch (error) {
        console.error("erro carrega metas", error);
      } finally {
        setLoading(false);
      }
    } else {
      return navigate("/");
    }
  }

  useEffect(() => {
    carregaMeta();
  }, []);

  return (
    <MetaContext.Provider value={{ carregaMeta, metas, setMetas }}>
      {children}
    </MetaContext.Provider>
  );
}
