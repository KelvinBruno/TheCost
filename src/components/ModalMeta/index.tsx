import CurrencyInput from "react-currency-input-field";
import { MdClear } from "react-icons/md";
import { BtnSalvar, Input } from "../../styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";
import {
  BotaoFechar,
  BtnApagar,
  ComponenteModal,
  DivTitle,
  FormModal,
  InputsGroup,
  LabelModal,
  Modal,
  Title,
} from "./style.module";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useContext } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

interface IModal {
  id?: string;
  editar?: boolean;
  funcaoFechar: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

interface metaValues {
  objetivo: string;
  value: string | number;
}

export function ModalMeta({ editar, funcaoFechar, isOpen }: IModal) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<metaValues>();
  const onSubmit = handleSubmit((data) => {
    let { value } = data;
    console.log(data.value);
  });

  let tituloModal = "";
  let botoes = <BtnSalvar>Salvar</BtnSalvar>;

  if (editar) {
    tituloModal = "Editar Meta";
    botoes = (
      <>
        <BtnSalvar>Salvar</BtnSalvar>
        <BtnApagar>Excluir</BtnApagar>
      </>
    );
  } else {
    tituloModal = "Criar Meta";
  }

  function fechaModal() {
    funcaoFechar(!isOpen);
  }

  const addMeta = async (data: metaValues) => {
    await api
      .post("/metas", data)
      .then((response) => toast.success("Meta criada com sucesso"))
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const editarMeta = async (data: metaValues) => {
    await api
      .patch("/metas", data)
      .then((response) => toast.success("Meta editada com sucesso"))
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const deletarMeta = async () => {
    await api
      .delete("/metas")
      .then((response) => toast.success("Meta deletada com sucesso"))
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  function submitData(data: metaValues) {
    if (editar) {
      editarMeta(data);
      deletarMeta();
    } else {
      addMeta(data);
    }
  }

  return (
    <Modal>
      <ComponenteModal>
        <DivTitle>
          <Title>{tituloModal}</Title>
          <BotaoFechar onClick={() => fechaModal()}>
            <MdClear />
          </BotaoFechar>
        </DivTitle>
        <FormModal onSubmit={handleSubmit(submitData)}>
          <InputsGroup>
            <LabelModal htmlFor="objetivo">Objetivo</LabelModal>
            <Input
              type="text"
              id="objetivo"
              placeholder="Insira a descrição do objetivo"
              {...register("objetivo")}
            />
          </InputsGroup>
          <InputsGroup>
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
          </InputsGroup>
          <div id="botoes">{botoes}</div>
        </FormModal>
      </ComponenteModal>
    </Modal>
  );
}
