import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import api from "../services/api";

interface IOpenModalChildren {
  children: ReactNode;
}

interface IOpenModalContext {
  OpenModalRegister: boolean;
  setOpenModalRegister: Dispatch<SetStateAction<boolean>>;
  OpenModalMeta: boolean;
  setOpenModalMeta: Dispatch<SetStateAction<boolean>>;
  setOpenEditar: Dispatch<SetStateAction<boolean>>;
  openEditar: boolean;
  OnSubmitEditar: (dados: ISubmitEditar) => void;
  setIdRegistro: Dispatch<SetStateAction<number>>;
  idRegistro: number;
  data: object;
  setData: Dispatch<SetStateAction<object>>;
  DadosDefault: () => void;
}

interface ISubmitEditar {
  description?: string;
  type?: string;
  category?: string;
  value?: string;
  date?: string;
}

export const IsOpenModalContext = createContext({} as IOpenModalContext);

export const IsOpenModalProvider = ({ children }: IOpenModalChildren) => {
  const [OpenModalRegister, setOpenModalRegister] = useState(false);
  const [OpenModalMeta, setOpenModalMeta] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [idRegistro, setIdRegistro] = useState(0);
  const [data, setData] = useState({});

  function OnSubmitEditar(dados: ISubmitEditar) {
    const newData = {
      category: dados.category,
      date: dados.date,
      description: dados.description,
      type: dados.type,
      value: dados.value,
    };
    const token = localStorage.getItem("@the-cost:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.patch(`data/${idRegistro}`, newData);
  }
  async function DadosDefault() {
    const token = localStorage.getItem("@the-cost:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(
      await api.get(`https://thecost.herokuapp.com/data/${idRegistro}`)
    );
  }

  return (
    <IsOpenModalContext.Provider
      value={{
        OpenModalRegister,
        setOpenModalRegister,
        OpenModalMeta,
        setOpenModalMeta,
        openEditar,
        setOpenEditar,
        OnSubmitEditar,
        setIdRegistro,
        idRegistro,
        data,
        setData,
        DadosDefault,
      }}
    >
      {children}
    </IsOpenModalContext.Provider>
  );
};
