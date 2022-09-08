import CurrencyInput from "react-currency-input-field";
import { MdClear } from "react-icons/md";
import { BtnSalvar, Input } from "../../styles/global";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessageModalRegistro } from "../ModalRegistro/style.module";
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
import { Dispatch, SetStateAction, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import { MetaContext } from "../../Contexts/MetasContext";

interface IModal {
  id?: number;
  editar?: boolean;
  funcaoFechar: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  meta?: metaValues;
}

interface metaValues {
  objetivo: string;
  value: number | string;
  done: number | string | undefined;
  userId?: number;
  id?: number;
}

export function ModalMeta({ editar, funcaoFechar, isOpen, meta }: IModal) {
  const schema = yup.object({
    objetivo: yup.string().required("O objetivo é obrigatório"),
    value: yup.number().min(1, 'O valor deve ser maior que 0').required("O valor é obrigatório"),
    done: yup.number().required("O dinheiro guardado é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<metaValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      objetivo: meta?.objetivo,
      done: `R$ ${meta?.done}`,
      value: `R$ ${meta?.value}`,
    },
  });
  const { user } = useContext(AuthContext);
  const { carregaMeta } = useContext(MetaContext);

  const onSubmit = handleSubmit((data) => {
    let { value } = data;
    console.log(data.value);
  });
  let funcaoEditar;
  let tituloModal = "";
  let botoes = <BtnSalvar>Salvar</BtnSalvar>;

  if (editar) {
    tituloModal = "Editar Meta";
    botoes = (
      <>
        <BtnSalvar onClick={funcaoEditar}>Salvar</BtnSalvar>
        <BtnApagar
          onClick={(e) => {
            e.preventDefault();
            deletarMeta();
            carregaMeta();
            funcaoFechar(!isOpen);
          }}
        >
          Excluir
        </BtnApagar>
      </>
    );
  } else {
    tituloModal = "Criar Meta";
  }

  function fechaModal() {
    funcaoFechar(!isOpen);
  }

  const addMeta = async (data: metaValues) => {
    data.userId = user?.id;
    await api
      .post("/metas", data)
      .then((response) => {
        carregaMeta();
        toast.success("Meta criada com sucesso");
        funcaoFechar(!isOpen);
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const editarMeta = async (data: metaValues) => {
    await api
      .patch(`/metas/${meta?.id}`, data)
      .then((response) => {
        toast.success("Meta editada com sucesso");
        funcaoFechar(!isOpen);
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const deletarMeta = async () => {
    funcaoFechar(!isOpen);
    await api
      .delete(`/metas/${meta?.id}`)
      .then((response) => {
        toast.success("Meta deletada com sucesso");
        carregaMeta();
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  function submitData(data: metaValues) {
    if (editar) {
      funcaoEditar = editarMeta(data);
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
             {errors.objetivo && (
              <ErrorMessageModalRegistro>
                {errors.objetivo.message}
              </ErrorMessageModalRegistro>
            )}
          </InputsGroup>
          <InputsGroup>
            <LabelModal htmlFor="valor">Valor</LabelModal>
            {editar ? (
              <CurrencyInput
                id="valor"
                placeholder="R$"
                decimalsLimit={2}
                maxLength={18}
                disableAbbreviations
                defaultValue={meta?.value}
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
            ) : (
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
            )}
             {errors.value && (
              <ErrorMessageModalRegistro>
                {errors.value.message}
              </ErrorMessageModalRegistro>
            )}
          </InputsGroup>
          <InputsGroup>
            <LabelModal htmlFor="valor">Dinheiro guardado</LabelModal>
            {editar ? (
              <CurrencyInput
                id="valor"
                placeholder="R$"
                decimalsLimit={2}
                maxLength={18}
                disableAbbreviations
                defaultValue={meta?.done}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                {...register("done", {
                  setValueAs: (done) => {
                    done = done.slice(3);
                    done = done.replaceAll(".", "");
                    done = done.replace(",", ".");
                    done = parseFloat(done);
                    return done;
                  },
                })}
              />
            ) : (
              <CurrencyInput
                id="valor"
                placeholder="R$"
                decimalsLimit={2}
                maxLength={18}
                disableAbbreviations
                defaultValue={0}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                {...register("done", {
                  setValueAs: (done) => {
                    done = done.slice(3);
                    done = done.replaceAll(".", "");
                    done = done.replace(",", ".");
                    done = parseFloat(done);
                    return done;
                  },
                })}
              />
            )}
             {errors.done && (
              <ErrorMessageModalRegistro>
                {errors.done.message}
              </ErrorMessageModalRegistro>
            )}
          </InputsGroup>
          <div id="botoes">{botoes}</div>
        </FormModal>
      </ComponenteModal>
    </Modal>
  );
}
