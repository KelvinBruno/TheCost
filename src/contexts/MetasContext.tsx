import { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "vm";
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
  CarregarMeta: () => Promise<void>;
  setMetas: Dispatch<SetStateAction<never[]>>;
  metas: IMeta[];
}

export const MetaContext = createContext({} as IMetaContext);

export function MetaProvider({ children }: IMetaChildren){
  const [ metas, setMetas ] = useState([])

  async function CarregaMeta() {
    const token = localStorage.getItem("@the-cost:token");
    const { setLoading } = useContext(AuthContext);
      const navigate = useNavigate();

    if (token) {
      try {
        const data = await api.get("/metas");
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
    CarregaMeta();
  }, [metas]);

    return (
      <MetaContext.Provider value={{ CarregaMeta, metas, setMetas }}>
        {children}
      </MetaContext.Provider>
    );
}
