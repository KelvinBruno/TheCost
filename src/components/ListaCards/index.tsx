import { Div, Ul, P, Header } from "./styles";
import { AiFillCar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { RiPlaneLine } from "react-icons/ri";
import { FaTshirt } from "react-icons/fa";
import Faturas from "../../assets/Faturas.svg";
import Money from "../../assets/Vector.svg";
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
  const DataBase: ITeste[] = [
    {
      description: "Salário do mês",
      type: "Receita",
      category: "Salário",
      value: 3040,
      date: "01/08/2022",
      userId: 2,
      id: 1,
    },
    {
      description: "Salário do mês",
      type: "Receita",
      category: "Salário",
      value: 3040,
      date: "01/08/2022",
      userId: 2,
      id: 1,
    },
    {
      description: "Salário do mês",
      type: "Receita",
      category: "Salário",
      value: 3040,
      date: "01/08/2022",
      userId: 2,
      id: 1,
    },
    {
      description: "Salário do mês",
      type: "Receita",
      category: "Salário",
      value: 3040,
      date: "01/08/2022",
      userId: 2,
      id: 1,
    },
    {
      description: "Compras do mês",
      type: "Receita",
      category: "Veículo",
      value: 200,
      date: "04/08/2022",
      userId: 2,
      id: 2,
    },
    {
      description: "Valor legal",
      type: "Despesa",
      category: "Contas",
      value: 157890,
      date: "01/09/2022",
      userId: 3,
      id: 3,
    },
    {
      description: "Valor legal",
      type: "Despesa",
      category: "Contas",
      value: 157890,
      date: "01/09/2022",
      userId: 3,
      id: 3,
    },
    {
      description: "Valor legal",
      type: "Despesa",
      category: "Contas",
      value: 157890,
      date: "01/09/2022",
      userId: 3,
      id: 3,
    },
    {
      description: "Valor legal",
      type: "Despesa",
      category: "Contas",
      value: 157890,
      date: "01/09/2022",
      userId: 3,
      id: 3,
    },
  ];
  return (
    <Div>
      <Header>
        <p>despesas</p>
        <p>truco</p>
        <p>macadâmia</p>
      </Header>
      <Ul>
        {DataBase.map((data) =>
          data.category === "Veículo" ? (
            <li>
              <section>
                <AiFillCar size={"1.2rem"} />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          ) : data.category === "Supermercado" ? (
            <li>
              <section>
                <AiOutlineShoppingCart size={"1.2rem"} />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          ) : data.category === "Salário" ? (
            <li>
              <section>
                <img src={Money} alt="money" />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          ) : data.category === "Contas" ? (
            <li>
              <section>
                <img src={Faturas} alt="faturas" />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          ) : data.category === "Moda/Beleza" ? (
            <li>
              <section>
                <FaTshirt size={"1.2rem"} />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          ) : data.category === "Lazer" ? (
            <li>
              <section>
                <BsCameraReelsFill size={"1.2rem"} />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          ) : (
            <li>
              <section>
                <RiPlaneLine size={"1.2rem"} />
                <P className="category">{data.category}</P>

                <p>{data.description}</p>
              </section>
              {data.type === "Despesa" ? (
                <P color="#D10707">R${data.value}</P>
              ) : (
                <P color="#053770">R${data.value}</P>
              )}
            </li>
          )
        )}
      </Ul>
    </Div>
  );
}
export default ListaCards;
