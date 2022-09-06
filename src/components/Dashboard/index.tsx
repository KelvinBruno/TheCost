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

export function Dashboard() {
  return (
    <>
      <Header>
        <div className="centralize-logo">
          <img src={logo} alt="Logo The Cost"></img>
          <h2>The Cost</h2>
        </div>
        <button>Perfil</button>
      </Header>

      <Container>
        <Status>
          <div>
            <LabelDash>Despesas/Receita:</LabelDash>
            <select>
              <option>Todos</option>
              <option>Despesas</option>
              <option>Receitas</option>
            </select>
          </div>

          <div>
            <LabelDash>Categoria:</LabelDash>
            <select>
              <option>Todos</option>
              <option>Salário</option>
              <option>Supermercado</option>
              <option>Veículo</option>
              <option>Contas</option>
              <option>Moda/Beleza</option>
              <option>Lazer</option>
              <option>Viagem</option>
            </select>
          </div>
          <BtnRegistroDash>Novo Registro</BtnRegistroDash>
        </Status>

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
