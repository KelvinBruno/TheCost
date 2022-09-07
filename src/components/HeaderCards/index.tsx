import { useContext, useState } from "react";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
import {
  BtnRegistroDash,
  LabelDash,
  Select,
  SelectTipo,
  Status,
} from "./style.module";

export function HeaderCards() {
  const [tipo, setTipo] = useState("");
  const { OpenModalRegister, setOpenModalRegister, setId, setData } =
    useContext(IsOpenModalContext);

  let optionTipo = (
    <>
      <option value="Todos" id="todos">
        Todos
      </option>
      <option value="Salário" id="salario">
        Salário
      </option>
      <option value="Outros rendimentos" id="outros-rendimentos">
        Outros rendimentos
      </option>
      <option value="Supermercado" id="supermercado">
        Supermercado
      </option>
      <option value="Veículo" id="veiculo">
        Veículo
      </option>
      <option value="Contas" id="contas">
        Contas
      </option>
      <option value="Moda/Beleza" id="moda-beleza">
        Moda/Beleza
      </option>
      <option value="Lazer" id="lazer">
        Lazer
      </option>
      <option value="Viagem" id="viagem">
        Viagem
      </option>
      <option value="Supermercado" id="Supermercado">
        Supermercado
      </option>
      <option value="Veículos" id="Veículos">
        Veículos
      </option>
    </>
  );

  if (tipo === "Receitas") {
    optionTipo = (
      <>
        <option value="Todos" id="todos">
          Todos
        </option>
        <option value="Salário" id="salario">
          Salário
        </option>
        <option value="Outros rendimentos" id="outros-rendimentos">
          Outros rendimentos
        </option>
      </>
    );
  }

  if (tipo === "Despesas") {
    optionTipo = (
      <>
        <option value="Todos" id="todos">
          Todos
        </option>
        <option value="Supermercado" id="supermercado">
          Supermercado
        </option>
        <option value="Veículo" id="veiculo">
          Veículo
        </option>
        <option value="Contas" id="contas">
          Contas
        </option>
        <option value="Moda/Beleza" id="moda-beleza">
          Moda/Beleza
        </option>
        <option value="Lazer" id="lazer">
          Lazer
        </option>
        <option value="Viagem" id="viagem">
          Viagem
        </option>
        <option value="Supermercado" id="Supermercado">
          Supermercado
        </option>
        <option value="Veículos" id="Veículos">
          Veículos
        </option>
      </>
    );
  }

  return (
    <>
      <Status>
        <div>
          <LabelDash>Despesas/Receita:</LabelDash>
          <Select onChange={(e) => setTipo(e.target.value)}>
            <option>Todos</option>
            <option>Despesas</option>
            <option>Receitas</option>
          </Select>
        </div>

        <div>
          <LabelDash>Categoria:</LabelDash>
          <SelectTipo>{optionTipo}</SelectTipo>
        </div>
        <BtnRegistroDash
          onClick={() => setOpenModalRegister(!OpenModalRegister)}
        >
          Novo Registro
        </BtnRegistroDash>
      </Status>
    </>
  );
}
