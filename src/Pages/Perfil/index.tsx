import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Centralize,
  Container,
  FormRegistro,
  Header,
  InputForm,
  LabelForm,
} from "../Registro/style.module";
import { ImgPerfil } from "./style.module";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useContext } from "react";
import { BtnCadastrar } from "../../styles/global";
import api from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { IRegistro } from "../../contexts/AuthRegistro";

interface IEditar {
  nome: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  image: string;
}

const Perfil = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const submitEditar = async (data: IEditar) => {
    const token = localStorage.getItem("@the-cost:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const { password } = data;
    delete data.confirmPassword;

    if (password === "") {
      delete data.password;
    }

    await api
      .patch(`/users/${user?.id}`, data)
      .then((response) => {
        console.log(data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Deve ser um email")
      .required("O email é obrigatório"),

    password: yup.string(),
    // .matches(
    //   /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    // ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),

    image: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistro>({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: user?.nome,
      email: user?.email,
      image: user?.image?.toString(),
    },
  });

  return (
    <>
      <Header>
        <div className="centralize-logo">
          <img src="./logo.svg" alt="Logo The Cost"></img>
          <h2>The Cost</h2>
        </div>
        <BsArrowLeftCircle
          onClick={() => navigate("/dashboard")}
          className="icon"
          size={30}
        />
      </Header>

      <Container>
        <FormRegistro onSubmit={handleSubmit(submitEditar)}>
          <h2>Editar Perfil</h2>

          <Centralize>
            <ImgPerfil
              src={
                user?.image
                  ? user.image
                  : "https://epipoca.com.br/wp-content/uploads/2022/04/luffy-one-piece-1015.jpg"
              }
              alt=""
            />
          </Centralize>
          <Centralize>
            <LabelForm htmlFor="name">Nome</LabelForm>
            <InputForm
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("nome")}
            />
            <div className="yup-notification">
              <p>{errors.nome?.message}</p>
            </div>
          </Centralize>

          <Centralize>
            <LabelForm htmlFor="name">Email</LabelForm>
            <InputForm
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <div className="yup-notification">
              <p>{errors.email?.message}</p>
            </div>
          </Centralize>

          <Centralize>
            <LabelForm htmlFor="name">Senha</LabelForm>
            <InputForm
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <div className="yup-notification">
              <p>{errors.password?.message}</p>
            </div>
          </Centralize>

          <Centralize>
            <LabelForm htmlFor="name">Confirmar senha</LabelForm>
            <InputForm
              type="password"
              id="confirmPassword"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <div className="yup-notification">
              <p>{errors.confirmPassword?.message}</p>
            </div>
          </Centralize>

          <Centralize>
            <LabelForm htmlFor="name">Link da imagem de perfil</LabelForm>
            <InputForm
              // defaultValue = {user?.image}
              type="url"
              id="link"
              placeholder="Insira aqui o link"
              {...register("image")}
            />
            <div className="yup-notification">
              <p>{errors.image?.message}</p>
            </div>
          </Centralize>

          <BtnCadastrar type="submit">Editar</BtnCadastrar>
        </FormRegistro>
      </Container>
    </>
  );
  // return user! ? (
  //   <>
  //     <Header>
  //       <div className="centralize-logo">
  //         <img src="./logo.svg" alt="Logo The Cost"></img>
  //         <h2>The Cost</h2>
  //       </div>
  //       <BsArrowLeftCircle className="icon" size={30} />
  //     </Header>

  //     <Container>
  //       <FormRegistro onClick={handleSubmit(submitRegistro)}>
  //         <h2>Editar Perfil</h2>
  //         <Centralize>
  //           <LabelForm htmlFor="name">Nome</LabelForm>
  //           <InputForm
  //             // defaultValue={user?.nome}
  //             type="text"
  //             id="name"
  //             placeholder="Digite aqui seu nome"
  //             {...register("nome")}
  //           />
  //           <div className="yup-notification">
  //             <p>{errors.nome?.message}</p>
  //           </div>
  //         </Centralize>

  //         <Centralize>
  //           <LabelForm htmlFor="name">Email</LabelForm>
  //           <InputForm
  //             type="email"
  //             id="email"
  //             placeholder="Digite aqui seu email"
  //             {...register("email")}
  //           />
  //           <div className="yup-notification">
  //             <p>{errors.email?.message}</p>
  //           </div>
  //         </Centralize>

  //         <Centralize>
  //           <LabelForm htmlFor="name">Senha</LabelForm>
  //           <InputForm
  //             type="password"
  //             id="password"
  //             placeholder="Digite aqui sua senha"
  //             {...register("password")}
  //           />
  //           <div className="yup-notification">
  //             <p>{errors.password?.message}</p>
  //           </div>
  //         </Centralize>

  //         <Centralize>
  //           <LabelForm htmlFor="name">Confirmar senha</LabelForm>
  //           <InputForm
  //             type="password"
  //             id="confirmPassword"
  //             placeholder="Digite novamente sua senha"
  //             {...register("confirmPassword")}
  //           />
  //           <div className="yup-notification">
  //             <p>{errors.confirmPassword?.message}</p>
  //           </div>
  //         </Centralize>

  //         <Centralize>
  //           <LabelForm htmlFor="name">Link da imagem de perfil</LabelForm>
  //           <InputForm
  //             type="url"
  //             id="link"
  //             placeholder="Insira aqui o link"
  //             {...register("image")}
  //           />
  //           <div className="yup-notification">
  //             <p>{errors.image?.message}</p>
  //           </div>
  //         </Centralize>

  //         <BtnCadastrar type="submit">Editar</BtnCadastrar>
  //       </FormRegistro>
  //     </Container>
  //   </>
  // ) : (
  //   <Navigate to={"/"} replace={true} />
  // );
};

export default Perfil;
