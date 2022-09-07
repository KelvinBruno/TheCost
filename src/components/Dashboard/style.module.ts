import styled from "styled-components";
import { BtnNovoRegistro, Label } from "../../styles/global";

export const Header = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  background-color: var(--blue-2);
  font-family: "Inter", sans-serif;
  div {
    width: 55%;
    margin-left: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 15rem;
    }
    button {
      margin-right: 5%;
      width: 2.5rem;
      height: 40%;
      border-radius: 50%;
      border: none;
      font-size: 30px;
      color: var(--blue-0);
    }
    @media (max-width: 1025px) {
      margin-left: 35%;
    }
    @media (max-width: 700px) {
      margin-left: 30%;
      width: 65%;
    }
    @media (max-width: 470px) {
      margin-left: 0;
      width: 100%;
    }
    .icon {
      color: var(--white);
      padding-right: 15px;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column-reverse;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  gap: 20px;

  height: 100%;

  background-color: var(--blue-0);
  @media (min-width: 1024px) {
    height: 77vh;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Vazio = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: red;

  img {
    width: 280px;
  }

  p {
    font-size: 14px;
    color: var(--white);
    font-family: "Inter", sans-serif;
    padding-bottom: 10px;
  }

  @media only screen and (min-width: 768px) {
    width: 750px;
    height: 450px;

    border-radius: 8px;
    background-color: var(--white);

    p {
      color: black;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Status = styled.div`
  width: 288px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 10px;
  background-color: var(--white);
  border-radius: 8px;

  div {
    display: flex;
  }

  @media only screen and (min-width: 768px) {
    width: 750px;
    height: 60px;
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const BtnRegistroDash = styled(BtnNovoRegistro)`
  width: 100px;
  height: 30px;
  font-size: 16px;
  border: 0.5px solid black;
  border-radius: 4px;
`;

export const Resumo = styled.div`
  width: 288px;
  height: 180px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    width: 90%;
    font-weight: 600;
    color: var(--blue-3);
    font-size: 16px;
    padding-top: 10px;
    border-bottom: 1px solid black;
    font-family: "Inter", sans-serif;
  }

  p {
    padding-top: 60px;
    font-family: "Inter", sans-serif;
  }
`;

export const Meta = styled.div`
  width: 288px;
  height: 180px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    width: 90%;
    font-weight: 600;
    color: var(--blue-3);
    font-size: 16px;
    border-bottom: 1px solid black;
    font-family: "Inter", sans-serif;
    padding-top: 10px;
  }

  p {
    padding-top: 60px;
    font-family: "Inter", sans-serif;
  }
`;

export const LabelDash = styled(Label)`
  width: 100%;
  margin: 10px;
  padding-bottom: 5px;

  color: var(--blue-3);

  font-size: 16px;
  font-weight: 600;
  text-align: start;
  font-family: "Inter", sans-serif;
`;
