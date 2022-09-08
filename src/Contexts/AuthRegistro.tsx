import { createContext, ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const navigate = useNavigate()
  const submitRegistro = async (data: IRegistro) => {
    await api
      .post("/users", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso.");
        navigate("/")
      })
      .catch((error) => {toast.error("ops, ocorreu um erro.")})
  };

  return (
    <AuthRegistroContext.Provider value={{ submitRegistro }}>
      {children}
    </AuthRegistroContext.Provider>
  );
};

export default AuthRegistro;
