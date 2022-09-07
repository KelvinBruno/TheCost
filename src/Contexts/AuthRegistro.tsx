import { createContext, ReactNode } from "react";
import api from "../services/api";

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IRegistro {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
}

interface IAuthRegistroContext {
  submitRegistro: (data: IRegistro) => Promise<void>;
}

export const AuthRegistroContext = createContext({} as IAuthRegistroContext);

const AuthRegistro = ({ children }: IAuthProviderProps) => {
  const submitRegistro = async (data: IRegistro) => {
    await api
      .post("/users", data)
      .then((response) => {
        console.log(data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthRegistroContext.Provider value={{ submitRegistro }}>
      {children}
    </AuthRegistroContext.Provider>
  );
};

export default AuthRegistro;
