import { ReactNode, useContext, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface IMetaChildren {
  children: ReactNode;
}

export interface IMeta{
  objetivo: string;
  value: number;
  done: number;
  userId: number;
  id: number;
}

interface IMetaContext {
  setMetas: React.Dispatch<React.SetStateAction<never[]>>;
  metas: IMeta[];
  carregaMeta: () => Promise<void>;
}

export const MetaContext = createContext<IMetaContext>({} as IMetaContext);

export function MetaProvider({ children }: IMetaChildren){
  const [ metas, setMetas ] = useState([])
  const navigate = useNavigate();
  const { setLoading } = useContext(AuthContext);

  async function carregaMeta() {
    console.log('carregando metas')
    const token = localStorage.getItem("@the-cost:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    if (token) {
      try {
        const data = await api.get("/metas");
        console.log(data)
        const { data: Metas } = data;

        setMetas(Metas)
      } catch (error) {
        navigate("/");
      } finally {
        setLoading(false);
      }
    } else {
      return navigate("/");
    }
  }

  useEffect(() => {
    carregaMeta();
  }, [metas]);

    return (
      <MetaContext.Provider value={{ carregaMeta, metas, setMetas }}>
        {children}
      </MetaContext.Provider>
    );
}
