import { createContext, ReactNode } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IAuthProviderProps{
    children: ReactNode;
}

export interface IRegistro{
    nome: string;
    email: string;
    password: string;
    confirmPassword: string;
    image: string;
}

export interface IAuthRegistroContext {
    submitRegistro: (data: IRegistro) => Promise<void>;
}

export const AuthRegistroContext = createContext({} as IAuthRegistroContext)

const AuthRegistroProvider = ({ children }: IAuthProviderProps) => {
    const navigate = useNavigate()
    const submitRegistro = async (data: IRegistro) => {
        await api.post("/users", data)
        .then((response) => {
            toast.success("Cadastro realizado com sucesso")
            navigate("/");
        })
        .catch((error) => {
            toast.error("Ops! Algo deu errado!")
        })
    }
    
    return(
        <AuthRegistroContext.Provider value={{ submitRegistro }}>
            { children }
        </AuthRegistroContext.Provider>
    )
}

export default AuthRegistroProvider