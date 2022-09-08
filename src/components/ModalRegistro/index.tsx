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
import { Dispatch, SetStateAction, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  IGastos,
  RegistroGastosContext,
} from "../../Contexts/RegistroGastosContext";
import { IsOpenModalContext } from "../../Contexts/ModalContext";

interface IModal {
  id?: number;
  editar?: boolean;
  funcaoFechar: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  data?: IGastos;
}

interface FormValues {
  description: string;
  type: string;
  category: string;
  date: Date | string;
  value: number | string;
  userId: number | null;
  id?: number;
}

export function ModalRegistro({ editar, funcaoFechar, isOpen }: IModal) {
  const { user } = useContext(AuthContext);
  const { carregaGastos } = useContext(RegistroGastosContext);
  const { Data, Id } = useContext(IsOpenModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      description: Data?.description,
      category: Data?.category,
      date: Data?.date,
      type: Data?.type,
    },
  });

  let idUser: null | number = null;

  if (user?.id) {
    idUser = user.id;
  }

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
      </>
    );
  }

  const addRegistro = async (data: FormValues) => {
    if (data.type === "Despesas" && data.category === "Salário") {
      data.category = "Supermercado";
    }
    data.userId = idUser;
    await api
      .post("/data", data)
      .then((response) => {
        toast.success("Registro criado com sucesso");
        carregaGastos();

        funcaoFechar(false);
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const editarRegistro = async (data: FormValues) => {
    if (data.type === "Despesas" && data.category === "Salário") {
      data.category = "Supermercado";
    }
    data.userId = idUser;
    await api
      .patch(`/data/${Id}`, data)
      .then((response) => {
        toast.success("Registro editado com sucesso");
        console.log(Data);
        carregaGastos();

        funcaoFechar(false);
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  function submitData(data: FormValues) {
    data.userId = idUser;
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
              <Select
                id="tipo"
                {...register("type")}
                onChange={(e) => setTipo(e.target.value)}
              >
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
              <Select {...register("category")} id="categoria">
                {optionTipo}
              </Select>
            </ContainerInputGroup>
          </InputsGroup>
          <InputsGroup>
            <ContainerInputGroup>
              <LabelModal htmlFor="data">Data</LabelModal>
              <InputData
                type="date"
                id="data"
                {...register("date", {
                  setValueAs: (value) => {
                    value = value.split("-").reverse().join("/");
                    return value;
                  },
                })}
              />
            </ContainerInputGroup>
            <ContainerInputGroup id="div-valor">
              <LabelModal htmlFor="valor">Valor</LabelModal>
              {editar ? (
                <CurrencyInput
                  id="valor"
                  prefix="R$"
                  placeholder="R$"
                  decimalsLimit={2}
                  maxLength={18}
                  disableAbbreviations
                  defaultValue={Data?.value}
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
                  prefix="R$"
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
            </ContainerInputGroup>
          </InputsGroup>
          <BtnSalvar type="submit">Salvar</BtnSalvar>
        </FormModal>
      </ComponenteModal>
    </Modal>
  );
}
