import { Div, Ul, P, Header } from "./styles";
import { AiFillCar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { RiPlaneLine } from "react-icons/ri";
import { FaTshirt, FaTrash, FaPen } from "react-icons/fa";
import Faturas from "../../assets/Faturas.svg";
import Money from "../../assets/Vector.svg";
import { BtnEditar, BtnExcluir } from "../../styles/global";
import { useContext } from "react";
import { RegistroGastosContext } from "../../contexts/RegistroGastosContext";

function ListaCards() {
  interface ITeste {
    description: string;
    type: string;
    category: string;
    value: number;
    date: string;
    userId: number;
    id: number;
  }

  const { gastos } = useContext(RegistroGastosContext);

  return (
    <Div>
      <Header>
        <p id="categoria">Categoria</p>
        <p id="descricao">Descrição</p>
        <p id="gasto">gasto</p>
        <p id="valor">Valor</p>
        <p id="opcoes">Opções</p>
      </Header>
      <Ul>
        {gastos.map((gasto) =>
          gasto.category === "Veículo" ? (
            <li>
              <section>
                <section className="category">
                  <AiFillCar size={"1.2rem"} />
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>

              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <BtnEditar>
                  <FaPen />
                </BtnEditar>
                <BtnExcluir>
                  <FaTrash />
                </BtnExcluir>
              </section>
            </li>
          ) : gasto.category === "Supermercado" ? (
            <li>
              <section>
                <section className="category">
                  <AiOutlineShoppingCart size={"1.2rem"} />
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>
              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <BtnEditar>
                  <FaPen />
                </BtnEditar>
                <BtnExcluir>
                  <FaTrash />
                </BtnExcluir>
              </section>
            </li>
          ) : gasto.category === "Salário" ? (
            <li>
              <section>
                <section className="category">
                  <img src={Money} alt="money" />
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>
              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <BtnEditar>
                  <FaPen />
                </BtnEditar>
                <BtnExcluir>
                  <FaTrash />
                </BtnExcluir>
              </section>
            </li>
          ) : gasto.category === "Contas" ? (
            <li>
              <section>
                <section className="category">
                  <img src={Faturas} alt="faturas" />
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>
              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <BtnEditar>
                  <FaPen />
                </BtnEditar>
                <BtnExcluir>
                  <FaTrash />
                </BtnExcluir>
              </section>
            </li>
          ) : gasto.category === "Moda/Beleza" ? (
            <li>
              <section>
                <section className="category">
                  <FaTshirt size={"1.2rem"} />
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>
              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <FaPen className="hoverRed" />
                <FaTrash className="hoverRed" />
              </section>
            </li>
          ) : gasto.category === "Lazer" ? (
            <li>
              <section>
                <section className="category">
                  <BsCameraReelsFill size={"1.2rem"} />
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>
              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <BtnEditar>
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
                  <P>{gasto.category}</P>
                </section>

                <p>{gasto.description}</p>
              </section>
              <P className="date">{gasto.date}</P>
              {gasto.type === "Despesa" ? (
                <P color="#D10707">R${gasto.value}</P>
              ) : (
                <P color="#053770">R${gasto.value}</P>
              )}
              <section className="editar">
                <BtnEditar>
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
  );
}
export default ListaCards;
