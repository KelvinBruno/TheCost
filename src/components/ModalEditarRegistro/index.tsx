import CurrencyInput from "react-currency-input-field";
import { MdClear } from "react-icons/md";
import { BtnSalvar, Input } from "../../styles/global";
import {
  BotaoFechar,
  ComponenteModal,
  ContainerInputGroup,
  DivTitle,
  FormModal,
  InputData,
  InputsGroup,
  LabelModal,
  Modal,
  Select,
  Title,
} from "../ModalRegistro/style.module";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
import { type } from "os";
import { string } from "yup";
import api from "../../services/api";
import { ComponenteModal1, LabelModal1, Select1 } from "./styles";

interface FormValues {
  description: string;
  type: string;
  category: string;
  date: string;
  value: number | string;
}

function ModalEditarRegistro() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [options, setOptions] = useState("Receitas");
  const { setOpenEditar, OnSubmitEditar } = useContext(IsOpenModalContext);

  return (
    <Modal>
      <ComponenteModal1>
        <DivTitle>
          <Title>Editar</Title>
          <BotaoFechar onClick={() => setOpenEditar(false)}>
            <MdClear />
          </BotaoFechar>
        </DivTitle>
        <FormModal onSubmit={handleSubmit(OnSubmitEditar)}>
          <InputsGroup>
            <LabelModal1 htmlFor="descricao">Descrição</LabelModal1>
            <Input
              type="text"
              id="descricao"
              placeholder="Insira a descrição do gasto"
              {...register("description")}
            />
          </InputsGroup>
          <InputsGroup>
            <ContainerInputGroup>
              <LabelModal htmlFor="tipo">Tipo</LabelModal>
              <Select1
                id="tipo"
                {...register("type")}
                onChange={(e) => setOptions(e.target.value)}
              >
                <option value="Receitas" id="Receitas">
                  Receitas
                </option>
                <option value="Despesas" id="Despesas">
                  Despesas
                </option>
              </Select1>
            </ContainerInputGroup>
            <ContainerInputGroup>
              <LabelModal htmlFor="categoria">Categoria</LabelModal>
              <Select id="categoria" {...register("category")}>
                {options === "Receitas" ? (
                  <>
                    <option value="Salário" id="Salário">
                      Salário
                    </option>
                    <option value="Outros rendimentos" id="Outros rendimentos">
                      Outros rendimentos
                    </option>
                  </>
                ) : (
                  <>
                    <option>Veículo</option>
                    <option>Supermercado</option>
                    <option>Salário</option>
                    <option>Contas</option>
                    <option>Moda/Beleza</option>
                    <option>Lazer</option>
                    <option>Outros</option>
                  </>
                )}
              </Select>
            </ContainerInputGroup>
          </InputsGroup>
          <InputsGroup>
            <ContainerInputGroup>
              <LabelModal htmlFor="data">Data</LabelModal>
              <InputData type="date" id="data" {...register("date")} />
            </ContainerInputGroup>
            <ContainerInputGroup id="div-valor">
              <LabelModal1 htmlFor="valor">Valor</LabelModal1>
              <CurrencyInput
                id="valor"
                placeholder="R$"
                decimalsLimit={2}
                maxLength={18}
                disableAbbreviations
                defaultValue={0}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                {...register("value", {
                  setValueAs: (value) => {
                    value = value.slice(3);
                    value = value.replaceAll(".", "");
                    value = value.replace(",", ".");
                    value = parseFloat(value);
                    return value;
                  },
                })}
              />
            </ContainerInputGroup>
          </InputsGroup>
          <BtnSalvar>Salvar</BtnSalvar>
        </FormModal>
      </ComponenteModal1>
    </Modal>
  );
}

export default ModalEditarRegistro;
