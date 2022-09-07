import CurrencyInput from "react-currency-input-field";
import { MdClear } from "react-icons/md";
import { BtnSalvar, Input } from "../../styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";
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
} from "./style.module";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

interface IModal {
  id?: string;
  editar?: boolean;
  funcaoFechar: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

interface FormValues {
  description: string;
  type: string;
  category: string;
  date: Date;
  value: number | string;
}

export function ModalRegistro({ id, editar, funcaoFechar, isOpen }: IModal) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    let { value } = data;
    console.log(data.value);
  });

  let tituloModal = "";
  let optionTipo = (
    <>
      <option value="Salário" id="Salário">
        Salário
      </option>
      <option value="Outros rendimentos" id="Outros rendimentos">
        Outros rendimentos
      </option>
    </>
  );

  const [tipo, setTipo] = useState("");

  if (editar) {
    tituloModal = "Editar Registro";
  } else {
    tituloModal = "Criar Registro";
  }

  if (tipo === "Despesas") {
    optionTipo = (
      <>
        <option value="Supermercado" id="Supermercado">
          Supermercado
        </option>
        <option value="Veículos" id="Veículos">
          Veículos
        </option>
      </>
    );
  }

  const addRegistro = async (data: FormValues) => {
    await api
      .post("/data", data)
      .then((response) => toast.success("Registro criado com sucesso"))
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const editarRegistro = async (data: FormValues) => {
    await api
      .patch("/data", data)
      .then((response) => toast.success("Registro editado com sucesso"))
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  function submitData(data: FormValues) {
    if (editar) {
      editarRegistro(data);
    } else {
      addRegistro(data);
    }
  }

  function fecharModal() {
    funcaoFechar(!isOpen);
  }

  return (
    <Modal>
      <ComponenteModal>
        <DivTitle>
          <Title>{tituloModal}</Title>
          <BotaoFechar onClick={() => fecharModal()}>
            <MdClear />
          </BotaoFechar>
        </DivTitle>
        <FormModal onSubmit={handleSubmit(submitData)}>
          <InputsGroup>
            <LabelModal htmlFor="descricao">Descrição</LabelModal>
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
              <Select id="tipo" onChange={(e) => setTipo(e.target.value)}>
                <option value="Receitas" id="Receitas">
                  Receitas
                </option>
                <option value="Despesas" id="Despesas">
                  Despesas
                </option>
              </Select>
            </ContainerInputGroup>
            <ContainerInputGroup>
              <LabelModal htmlFor="categoria">Categoria</LabelModal>
              <Select id="categoria">{optionTipo}</Select>
            </ContainerInputGroup>
          </InputsGroup>
          <InputsGroup>
            <ContainerInputGroup>
              <LabelModal htmlFor="data">Data</LabelModal>
              <InputData type="date" id="data" {...register("date")} />
            </ContainerInputGroup>
            <ContainerInputGroup id="div-valor">
              <LabelModal htmlFor="valor">Valor</LabelModal>
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
          <BtnSalvar type="submit">Salvar</BtnSalvar>
        </FormModal>
      </ComponenteModal>
    </Modal>
  );
}
