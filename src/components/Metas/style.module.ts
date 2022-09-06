import styled from "styled-components";
import { BtnNovoRegistro } from "../../styles/global";

export const Meta = styled.div`
  width: 288px;
  height: auto;
  border-radius: 8px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: start;

  .centralize-header-metas {
    padding-top: 10px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;

    h2 {
      width: 90%;
      font-weight: 600;
      color: var(--blue-3);
      font-size: 16px;
      margin: 10px 0;
      font-family: "Inter", sans-serif;
    }
  }

  .centralize-metas {
    width: 90%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;
    border-bottom: none;

    h3 {
      margin: 5px 0;
      font-weight: 600;
      color: var(--blue-2);
      font-size: 14px;
      font-family: "Inter", sans-serif;
    }
  }

  span {
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--blue-1);
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
`;

export const BtnRegistroMeta = styled(BtnNovoRegistro)`
  height: 30px;
  width: 220px;
  min-width: 50px;
  display: flex;
  align-items: center;
  padding: 0px;
  border-radius: 4px;
  font-size: 13px;
  border: 0.5px solid black;
  font-family: "Inter", sans-serif;
`;
