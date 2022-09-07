import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IAuthChildren {
  children: ReactNode;
}

interface IAuthContext {
  loading: boolean;
  user: null | IUser;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  signIn: SubmitHandler<FieldValues>;
}

export interface IUser {
  email: string;
  nome: string;
  image?: string | null;
  id: number;
}

export interface IResponseLogin {
  user: IUser;
  accessToken: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthChildren) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  async function signIn(data: FieldValues) {
    setLoading(true);
    try {
      const response = await api.post<IResponseLogin>("/login", data);

      if (response.status === 200) {
        const { user, accessToken } = response.data;
        localStorage.setItem("@the-cost:token", accessToken);
        localStorage.setItem("@the-cost:name", user.nome);

        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        setUser(user);
        console.log(accessToken);
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error("Usuário ou senha incorreto.");
    }
  }

  return (
    <AuthContext.Provider
      value={{ loading, user, setUser, signIn, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
