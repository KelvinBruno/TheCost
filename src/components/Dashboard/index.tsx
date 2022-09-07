import ListaCards from "../ListaCards";
import { Header, Container, Vazio } from "./style.module";
import logo from "../../assets/logo.png";
import Metas from "../Metas";
import { HeaderCards } from "../HeaderCards";
import { useContext } from "react";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
import { ModalRegistro } from "../ModalRegistro";
import Resumo from "../Resumo";

export function Dashboard() {
  const {
    OpenModalRegister,
    setOpenModalRegister,
    OpenModalEditRegister,
    setOpenModalEditRegister,
    Id,
    Data,
  } = useContext(IsOpenModalContext);

  return (
    <>
      {OpenModalRegister && (
        <ModalRegistro
          funcaoFechar={setOpenModalRegister}
          isOpen={OpenModalRegister}
        />
      )}

      {OpenModalEditRegister && (
        <ModalRegistro
          funcaoFechar={() => setOpenModalEditRegister(!OpenModalEditRegister)}
          id={Id}
          data={Data}
          isOpen={OpenModalEditRegister}
          editar
        />
      )}

      <Header>
        <div className="centralize-logo">
          <img src={logo} alt="Logo The Cost"></img>
          <h2>The Cost</h2>
        </div>
        <button>Perfil</button>
      </Header>

      <Container>
        <HeaderCards></HeaderCards>
        <ListaCards />
        <Resumo />
        <Metas></Metas>
      </Container>
    </>
  );
}
