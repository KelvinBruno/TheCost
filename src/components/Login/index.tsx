import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnLogar } from "../../styles/global";
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
} from "./styles";
import logo from "../../assets/logo.png";
import api from "../../services/api";

interface IForm {
  email: string;
  senha: string;
}

function Login() {
  const schema = yup.object({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Email incorreto"),
    senha: yup.string().required("Senha é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  function onSubmit(dados: IForm) {
    const newData = {
      email: dados.email,
      password: dados.senha,
    };
    api
      .post("/login", newData)
      .then(
        (res) =>
          console.log(res) /*Aqui vem o redirecionamento e o Toast de sucesso*/
      )
      .catch((err) => console.log(err) /*aqui vem o toast de erro*/);
  }
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
        <Form1 onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <Label1>E-mail</Label1>
          <Input1 {...register("email")} />
          {errors.email && <P>{errors.email.message}</P>}
          <Label1>Senha</Label1>
          <Input1 type="password" {...register("senha")} />
          {errors.senha && <P>{errors.senha.message}</P>}
          <BtnLogar>Logar</BtnLogar>
          <P2>Ainda não tem login? Cadastre-se</P2>
          <BtnLogar>Cadastrar</BtnLogar>
        </Form1>
      </Div>
    </Divpai>
  );
}
export default Login;
