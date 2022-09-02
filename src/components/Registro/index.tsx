import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { BtnCadastrar } from "../../styles/global"
import { Centralize, Container, FormRegistro, Header, InputForm, LabelForm } from "./style.module";
import { BsArrowLeftCircle } from "react-icons/bs"

interface IRegistro{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    link: string;
}

const Registro = () => {
    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Deve ser um email").required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatória").matches(
            /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "A confirmação deve ser igual a senha").required("A confirmação é obrigatória"),
        link: yup.string().required("A imagem de perfil é obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRegistro>({resolver: yupResolver(schema)})


    return(
        <>
            <Header>
                <div className="centralize-logo">
                    <img src="./logo.svg" alt="Logo The Cost"></img>
                    <h2>The Cost</h2>
                </div>
                <BsArrowLeftCircle className="icon" size={30}/>
            </Header>

            <Container>
                <FormRegistro>
                    <h2>Cadastro</h2>
                    <Centralize>
                        <LabelForm htmlFor="name">Nome</LabelForm>
                        <InputForm 
                        type="text"
                        id="name"
                        placeholder="Digite aqui seu nome"
                        {...register("name")}
                        />
                        <div className="yup-notification"><p>{errors.name?.message}</p></div>
                    </Centralize>

                    <Centralize>
                        <LabelForm htmlFor="name">Email</LabelForm>
                        <InputForm 
                        type="email"
                        id="email"
                        placeholder="Digite aqui seu email"
                        {...register("email")}
                        />
                        <div className="yup-notification"><p>{errors.email?.message}</p></div>
                    </Centralize>
                    
                    <Centralize>
                        <LabelForm htmlFor="name">Senha</LabelForm>
                        <InputForm  
                        type="password"
                        id="password"
                        placeholder="Digite aqui sua senha"
                        {...register("password")}
                        />
                        <div className="yup-notification"><p>{errors.password?.message}</p></div>
                    </Centralize>

                    <Centralize>
                        <LabelForm htmlFor="name">Confirmar senha</LabelForm>
                        <InputForm  
                        type="password"
                        id="confirmPassword"
                        placeholder="Digite novamente sua senha"
                        {...register("confirmPassword")}
                        />
                        <div className="yup-notification"><p>{errors.confirmPassword?.message}</p></div>
                    </Centralize>

                    <Centralize>
                        <LabelForm htmlFor="name">Link da imagem de perfil</LabelForm>
                        <InputForm 
                        type="url"
                        id="link"
                        placeholder="Insira aqui o link"
                        {...register("link")}
                        />
                        <div className="yup-notification"><p>{errors.link?.message}</p></div>
                    </Centralize>

                    <BtnCadastrar type="button">Cadastrar</BtnCadastrar>
                </FormRegistro>
            </Container>
        </>
    )
}

export default Registro