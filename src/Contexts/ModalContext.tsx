import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IOpenModalChildren {
  children: ReactNode;
}

interface IOpenModalContext {
  OpenModalRegister: boolean;
  setOpenModalRegister: Dispatch<SetStateAction<boolean>>;
  OpenModalMeta: boolean;
  setOpenModalMeta: Dispatch<SetStateAction<boolean>>;
}

export const IsOpenModalContext = createContext({} as IOpenModalContext);

export const IsOpenModalProvider = ({ children }: IOpenModalChildren) => {
  const [OpenModalRegister, setOpenModalRegister] = useState(false);
  const [OpenModalMeta, setOpenModalMeta] = useState(false);

  return (
    <IsOpenModalContext.Provider
      value={{
        OpenModalRegister,
        setOpenModalRegister,
        OpenModalMeta,
        setOpenModalMeta,
      }}
    >
      {children}
    </IsOpenModalContext.Provider>
  );
};
