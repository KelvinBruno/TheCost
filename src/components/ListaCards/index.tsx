import { Div, Ul, P, Header } from "./styles";
import { AiFillCar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { RiPlaneLine } from "react-icons/ri";
import { FaTshirt, FaTrash, FaPen } from "react-icons/fa";
import Faturas from "../../assets/Faturas.svg";
import Money from "../../assets/Vector.svg";
import { BtnEditar, BtnExcluir } from "../../styles/global";
import { useContext } from "react";
import { RegistroGastosContext } from "../../Contexts/RegistroGastosContext";
import { Vazio } from "../Dashboard/style.module";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
function ListaCards() {
  const { gastos, temGastos, deletaGasto } = useContext(RegistroGastosContext);
  const { setData, setId, setOpenModalEditRegister } =
    useContext(IsOpenModalContext);

  if (temGastos) {
    return (
      <Div>
        <Header>
          <p>Categoria</p>
          <p>Descrição</p>
          <p>Data</p>
          <p>Valor</p>
          <p>Opções</p>
        </Header>
        <Ul>
          {gastos.map((Data) =>
            Data.category === "Veículo" ? (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <AiFillCar size={"1.2rem"} />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>

                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => (
                      setOpenModalEditRegister(true),
                      setId(Data.id),
                      setData(Data)
                    )}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir onClick={() => deletaGasto(Data.id)}>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : Data.category === "Supermercado" ? (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <AiOutlineShoppingCart size={"1.2rem"} />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>
                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => (
                      setOpenModalEditRegister(true),
                      setId(Data.id),
                      setData(Data)
                    )}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir onClick={() => deletaGasto(Data.id)}>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : Data.category === "Salário" ? (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <img src={Money} alt="money" />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>
                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => (
                      setOpenModalEditRegister(true),
                      setId(Data.id),
                      setData(Data)
                    )}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir onClick={() => deletaGasto(Data.id)}>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : Data.category === "Contas" ? (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <img src={Faturas} alt="faturas" />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>
                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => (
                      setOpenModalEditRegister(true),
                      setId(Data.id),
                      setData(Data)
                    )}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir onClick={() => deletaGasto(Data.id)}>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : Data.category === "Moda/Beleza" ? (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <FaTshirt size={"1.2rem"} />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>
                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <FaPen className="hoverRed" />
                  <FaTrash className="hoverRed" />
                </section>
              </li>
            ) : Data.category === "Lazer" ? (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <BsCameraReelsFill size={"1.2rem"} />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>
                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => (
                      setOpenModalEditRegister(true),
                      setId(Data.id),
                      setData(Data)
                    )}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir onClick={() => deletaGasto(Data.id)}>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : (
              <li key={Data.id}>
                <section>
                  <section className="category">
                    <RiPlaneLine size={"1.2rem"} />
                    <P>{Data.category}</P>
                  </section>

                  <p>{Data.description}</p>
                </section>
                <P className="date">{Data.date}</P>
                {Data.type === "Despesas" ? (
                  <P color="#D10707">R${Data.value}</P>
                ) : (
                  <P color="#053770">R${Data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => (
                      setOpenModalEditRegister(true),
                      setId(Data.id),
                      setData(Data)
                    )}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir onClick={() => deletaGasto(Data.id)}>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            )
          )}
        </Ul>
      </Div>
    );
  } else {
    return (
      <Div>
        <Vazio>
          <img src="./ovni.svg" alt="ovni"></img>
          <p>Nenhum registro foi encontrado...</p>
        </Vazio>
      </Div>
    );
  }
}

export default ListaCards;
