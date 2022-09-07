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
import ModalEditarRegistro from "../ModalEditarRegistro";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
function ListaCards() {
  const { gastos } = useContext(RegistroGastosContext);

  const { openEditar, setOpenEditar, setIdRegistro, DadosDefault } =
    useContext(IsOpenModalContext);
  return (
    <>
      {openEditar && <ModalEditarRegistro />}
      <Div>
        <Header>
          <p>Categoria</p>
          <p>Descrição</p>
          <p>Data</p>
          <p>Valor</p>
          <p>Opções</p>
        </Header>
        <Ul>
          {gastos.map((data) =>
            data.category === "Veículo" ? (
              <li>
                <section>
                  <section className="category">
                    <AiFillCar size={"1.2rem"} />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>

                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : data.category === "Supermercado" ? (
              <li>
                <section>
                  <section className="category">
                    <AiOutlineShoppingCart size={"1.2rem"} />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>
                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      DadosDefault();
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : data.category === "Salário" ? (
              <li>
                <section>
                  <section className="category">
                    <img src={Money} alt="money" />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>
                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : data.category === "Contas" ? (
              <li>
                <section>
                  <section className="category">
                    <img src={Faturas} alt="faturas" />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>
                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : data.category === "Moda/Beleza" ? (
              <li>
                <section>
                  <section className="category">
                    <FaTshirt size={"1.2rem"} />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>
                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : data.category === "Lazer" ? (
              <li>
                <section>
                  <section className="category">
                    <BsCameraReelsFill size={"1.2rem"} />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>
                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            ) : (
              <li>
                <section>
                  <section className="category">
                    <RiPlaneLine size={"1.2rem"} />
                    <P>{data.category}</P>
                  </section>

                  <p>{data.description}</p>
                </section>
                <P className="date">{data.date}</P>
                {data.type === "Despesa" ? (
                  <P color="#D10707">R${data.value}</P>
                ) : (
                  <P color="#053770">R${data.value}</P>
                )}
                <section className="editar">
                  <BtnEditar
                    onClick={() => {
                      setIdRegistro(data.id);
                      setOpenEditar(true);
                    }}
                  >
                    <FaPen />
                  </BtnEditar>
                  <BtnExcluir>
                    <FaTrash />
                  </BtnExcluir>
                </section>
              </li>
            )
          )}
        </Ul>
      </Div>
    </>
  );
}
export default ListaCards;
