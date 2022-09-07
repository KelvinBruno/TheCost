import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IGastos } from "./RegistroGastosContext";

interface IOpenModalChildren {
  children: ReactNode;
}

interface IOpenModalContext {
  OpenModalRegister: boolean;
  setOpenModalRegister: Dispatch<SetStateAction<boolean>>;
  OpenModalMeta: boolean;
  setOpenModalMeta: Dispatch<SetStateAction<boolean>>;
  OpenModalEditMeta: boolean;
  setOpenModalEditMeta: Dispatch<SetStateAction<boolean>>;
  OpenModalEditRegister: boolean;
  setOpenModalEditRegister: Dispatch<SetStateAction<boolean>>;
  Data: IGastos;
  setData: Dispatch<SetStateAction<IGastos>>;
  Id: number;
  setId: Dispatch<SetStateAction<number>>;
}

export const IsOpenModalContext = createContext({} as IOpenModalContext);

export const IsOpenModalProvider = ({ children }: IOpenModalChildren) => {
  const [OpenModalRegister, setOpenModalRegister] = useState(false);
  const [OpenModalEditRegister, setOpenModalEditRegister] = useState(false);
  const [OpenModalMeta, setOpenModalMeta] = useState(false);
  const [OpenModalEditMeta, setOpenModalEditMeta] = useState(false);
  const [Data, setData] = useState({
    description: "",
    type: "",
    category: "",
    value: 0,
    date: "",
    userId: 0,
    id: 0,
  });
  const [Id, setId] = useState(0);

  return (
    <IsOpenModalContext.Provider
      value={{
        OpenModalRegister,
        setOpenModalRegister,
        OpenModalMeta,
        setOpenModalMeta,
        OpenModalEditRegister,
        setOpenModalEditRegister,
        OpenModalEditMeta,
        setOpenModalEditMeta,
        Data,
        setData,
        Id,
        setId,
      }}
    >
      {children}
    </IsOpenModalContext.Provider>
  );
};
