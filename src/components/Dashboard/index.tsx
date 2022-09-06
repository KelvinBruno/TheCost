import ListaCards from "../ListaCards";
import {
  Header,
  BtnRegistroDash,
  Container,
  LabelDash,
  Status,
  Vazio,
} from "./style.module";
import logo from "../../assets/logo.png";
<<<<<<< HEAD
{
  const Dashboard = () => {
    return (
      <>
        <Header>
          <div className="centralize-logo">
            <img src={logo} alt="Logo The Cost"></img>
            <h2>The Cost</h2>
=======
import Metas from "../Metas";
import Resumo from "../Resumo";

export function Dashboard() {
  const num = false;
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
>>>>>>> aacd4d59122376402bac98996599993b7944e74e
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

<<<<<<< HEAD
=======
        {num ? (
>>>>>>> aacd4d59122376402bac98996599993b7944e74e
          <Vazio>
            <img src="./ovni.svg" alt="ovni"></img>
            <p>Nenhum registro foi encontrado...</p>
          </Vazio>
<<<<<<< HEAD

          <Resumo>
            <h2>Resumo</h2>
            <p>Aguardando novos registros...</p>
          </Resumo>

          <Meta>
            <h2>Meta</h2>
            <p>Aguardando novos registros...</p>
          </Meta>
        </Container>
      </>
    );
  };
}

export default Dashboard;
=======
        ) : (
          <ListaCards />
        )}
        <Resumo />
        <Metas></Metas>
      </Container>
    </>
  );
}
>>>>>>> aacd4d59122376402bac98996599993b7944e74e
