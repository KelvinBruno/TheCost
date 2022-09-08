import ListaCards from "../ListaCards";
import { Header, Container, Vazio } from "./style.module";
import logo from "../../assets/logo.png";
import Metas from "../Metas";
import { useContext } from "react";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
import { ModalRegistro } from "../ModalRegistro";
import Resumo from "../Resumo";
import { HeaderCards } from "../HeaderCards";
import DropDown from "../DropDown";

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
        <div>
          <img src="./logo.png" alt="Logo The Cost" />
          <DropDown />
        </div>
      </Header>

      <Container>
        <div className="ContainerResumoMetas">
          <Resumo />
          <Metas />
        </div>
        <div>
          <HeaderCards></HeaderCards>
          <ListaCards />
        </div>
      </Container>
    </>
  );
}
