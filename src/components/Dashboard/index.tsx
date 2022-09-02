import { Header, BtnRegistroDash, Container, LabelDash, Meta, Resumo, Status, Vazio } from "./style.module"

const Dashboard = () => {

    return (
        <>
            <Header>
                <div className="centralize-logo">
                    <img src="./logo.svg" alt="Logo The Cost"></img>
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

                <Vazio>
                    <img src="./ovni.svg" alt="ovni"></img>
                    <p>Nenhum registro foi encontrado...</p>
                </Vazio>

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
    )
}

export default Dashboard