import CurrencyInput from "react-currency-input-field";
import { MdClear } from "react-icons/md";
import { BtnSalvar, Input, Label } from "../../styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";
import {
  BotaoFechar,
  ComponenteModal,
  DivTitle,
  FormModal,
  InputData,
  InputsGroup,
  Modal,
  Select,
  Title,
} from "./style.module";
import { useForm } from "react-hook-form";

interface IModal {
  id: string;
  editar?: boolean;
}

interface FormValues {
  description: string;
  type: string;
  category: string;
  date: Date;
  value: number | string;
}

interface IHandleSubmit {
  handleSubmit: (data: FormValues) => Promise<void>;
}

export function ModalRegistro({ id, editar }: IModal) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    let { value } = data;
    console.log(data.value);
  });

  function fechaModal() {}

  if (editar) {
    return (
      <Modal>
        <ComponenteModal>
          <DivTitle>
            <Title>Editar Registro</Title>
            <BotaoFechar onClick={() => fechaModal()}>
              <MdClear />
            </BotaoFechar>
          </DivTitle>
          <FormModal onSubmit={onSubmit}>
            <Label htmlFor="descricao">Descrição</Label>
            <Input
              type="text"
              id="descricao"
              placeholder="Insira a descrição do gasto"
              {...register("description")}
            />
            <InputsGroup>
              <div>
                <Label htmlFor="tipo">Tipo</Label>
                <Select id="tipo" {...register("type")}>
                  <option value="Receita">Receita</option>
                  <option value="Despesa">Despesa</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="categoria">Categoria</Label>
                <Select id="categoria" {...register("category")}>
                  <option value="Salário">Salário</option>
                  <option value="Outros Rendimentos">Outros Rendimentos</option>
                </Select>
              </div>
            </InputsGroup>
            <InputsGroup>
              <div>
                <Label htmlFor="data">Data</Label>
                <InputData type="date" id="data" {...register("date")} />
              </div>
              <div id="div-valor">
                <Label htmlFor="valor">Valor</Label>
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
              </div>
            </InputsGroup>
            <BtnSalvar>Salvar</BtnSalvar>
          </FormModal>
        </ComponenteModal>
      </Modal>
    );
  } else {
    return (
      <Modal>
        <ComponenteModal>
          <DivTitle>
            <Title>Criar Registro</Title>
            <BotaoFechar onClick={() => fechaModal()}>
              <MdClear />
            </BotaoFechar>
          </DivTitle>
          <FormModal>
            <Label htmlFor="descricao">Descrição</Label>
            <Input
              type="text"
              id="descricao"
              placeholder="Insira a descrição do gasto"
            />
            <InputsGroup>
              <div>
                <Label htmlFor="tipo">Tipo</Label>
                <Select id="tipo" name="tipo">
                  <option value="Receita">Receita</option>
                  <option value="Despesa">Despesa</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="categoria">Categoria</Label>
                <Select id="categoria">
                  <option value="Salário">Salário</option>
                  <option value="Outros Rendimentos">Outros Rendimentos</option>
                </Select>
              </div>
            </InputsGroup>
            <InputsGroup>
              <div>
                <Label htmlFor="data">Data</Label>
                <InputData type="date" id="data" />
              </div>
              <div id="div-valor">
                <Label htmlFor="valor">Valor</Label>
                <CurrencyInput
                  id="valor"
                  decimalsLimit={2}
                  maxLength={18}
                  prefix="R$"
                  disableAbbreviations
                  defaultValue={0}
                  fixedDecimalLength={2}
                  placeholder="R$"
                  intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                />
              </div>
            </InputsGroup>
            <BtnSalvar>Salvar</BtnSalvar>
          </FormModal>
        </ComponenteModal>
      </Modal>
    );
  }
}
