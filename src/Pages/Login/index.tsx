import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnCadastrar, BtnLogar } from "../../styles/global";
import {
  Div,
  Header,
  Label1,
  Input1,
  Form1,
  Divpai,
  Div1,
  P,
  P2,
  ContainerForm,
} from "./styles";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

interface IForm {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const schema = yup.object({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Email incorreto"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  return (
    <Divpai>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <Div>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        <Div1>
          <img src={logo} alt="logo" />
          <p>Gerencie sua vida financeira de modo fácil e gratuito</p>
        </Div1>
        <ContainerForm>
          <Form1 onSubmit={handleSubmit(signIn)}>
            <h1>Login</h1>
            <Label1>E-mail</Label1>
            <Input1 {...register("email")} />
            {errors.email && <P>{errors.email.message}</P>}
            <Label1>Senha</Label1>
            <Input1 type="password" {...register("password")} />
            {errors.password && <P>{errors.password.message}</P>}
            <BtnLogar>Logar</BtnLogar>
            <P2>Ainda não tem login? Cadastre-se</P2>
            <BtnCadastrar onClick={() => navigate("/registro")}>
              Cadastrar
            </BtnCadastrar>
          </Form1>
        </ContainerForm>
      </Div>
    </Divpai>
  );
}
