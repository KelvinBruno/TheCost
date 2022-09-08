import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        /** Paleta de Cores */
        
        /* Azul */
        --blue-0: #279FD8;
        --blue-1: #0070ec;
        --blue-2: #053770;
        --blue-3: #04254a;

        /* Branco */
        --white: #fbfbfb;

        /* ícones */
        --opcoes-default: #646464;
        --editar-hover: #044cd6;
        --excluir-hover: #d10707;
    }
`;

export const BtnVoltar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blue-0);
  color: var(--white);
  border-radius: 8px;
  border: none;
  min-width: 158px;

  font-size: 18px;
  padding: 8px 10px;

  :hover {
    cursor: pointer;

    background-color: var(--blue-3);
  }
`;

export const BtnRegistrar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blue-0);
  color: var(--white);
  border-radius: 8px;
  border: none;
  min-width: 158px;

  font-size: 18px;
  padding: 8px 10px;

  :hover {
    cursor: pointer;

    background-color: var(--blue-2);
  }
`;

export const BtnLogar = styled(BtnRegistrar)``;
export const BtnCadastrar = styled(BtnRegistrar)``;
export const BtnNovoRegistro = styled(BtnRegistrar)``;
export const BtnConfirmarAlteracoes = styled(BtnRegistrar)``;
export const BtnSalvar = styled(BtnRegistrar)``;

export const btnIcone = styled.button`
  display: flex;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;

  color: white;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;
  height: 38.5px;
  border-radius: 4px;
  padding: 0 13px;
  gap: 8px;
  background-color: var(--white);
  border: none;

  :focus {
    box-shadow: 0 0 0 0;
    border: none;
    outline: 0;
  }
`;

export const BtnEditar = styled.button`
  color: var(--opcoes-default);
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
    color: var(--editar-hover);
  }
`;

export const BtnIcone = styled(BtnEditar)`
`;

export const BtnExcluir = styled(BtnEditar)`
  :hover {
    color: var(--excluir-hover);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 296px;
  width: 92.5%;
  border-radius: 34px;
  padding: 34px 18px;
  gap: 17.65px;
  background-color: var(--blue-3);
  margin-top: 0px;

  input {
    width: 92%;
  }

  h1 {
    font-weight: 700;
    font-size: 25px;
    color: var(--white);
    line-height: 22px;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 14px;
    padding: 0;
  }

  p {
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
  }
  
  button {
    width: 80%;
    margin-top: 7px;
    align-items: center;
  }
`;

export const Label = styled.label`
  text-align: start;
  color: white;
  font-weight: 400;
  font-size: 10px;
  line-height: 0;
`;

export default Global;
