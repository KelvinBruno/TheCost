import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
import {
  BtnRegistroDash,
  LabelDash,
  Select,
  SelectCategory,
  Status,
} from "./style.module";

export function HeaderCards() {
  const { Categoria, setCategoria, Tipo, setTipo } = useContext(FilterContext);
  const { OpenModalRegister, setOpenModalRegister, setId, setData } =
    useContext(IsOpenModalContext);

  let optionCategory;

  if (Tipo === "Todos") {
    console.log(Tipo);
    optionCategory = (
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
  }

  if (Tipo === "Receitas") {
    optionCategory = (
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

  if (Tipo === "Despesas") {
    optionCategory = (
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
            <option value="Todos">Todos</option>
            <option value="Despesas">Despesas</option>
            <option value="Receitas">Receitas</option>
          </Select>
        </div>

        <div>
          <LabelDash>Categoria:</LabelDash>
          <SelectCategory onChange={(e) => setCategoria(e.target.value)}>
            {optionCategory}
          </SelectCategory>
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
