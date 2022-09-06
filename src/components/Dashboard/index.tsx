import ListaCards from "../ListaCards";
import {
  Header,
  BtnRegistroDash,
  Container,
  LabelDash,
  Meta,
  Resumo,
  Status,
  Vazio,
} from "./style.module";
import logo from "../../assets/logo.png";
import Metas from "../Metas";
import { HeaderCards } from "../HeaderCards";
import { useContext } from "react";
import { IsOpenModalContext } from "../../contexts/ModalContext";
import { ModalRegistro } from "../ModalRegistro";

export function Dashboard() {
  const { OpenModalRegister } = useContext(IsOpenModalContext);
  const num = false;
  return (
    <>
      {OpenModalRegister && <ModalRegistro />}
      <Header>
        <div className="centralize-logo">
          <img src={logo} alt="Logo The Cost"></img>
          <h2>The Cost</h2>
        </div>
        <button>Perfil</button>
      </Header>

      <Container>
        <HeaderCards></HeaderCards>
        {num ? (
          <Vazio>
            <img src="./ovni.svg" alt="ovni"></img>
            <p>Nenhum registro foi encontrado...</p>
          </Vazio>
        ) : (
          <ListaCards />
        )}

        <Metas></Metas>
      </Container>
    </>
  );
}
