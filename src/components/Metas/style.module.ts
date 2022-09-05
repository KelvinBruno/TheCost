import styled from "styled-components";
import { BtnNovoRegistro } from "../../styles/global";

export const Meta = styled.div`
    width: 288px;
    height: 180px;
    border-radius: 8px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  
    div{
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid black;

        h2{
        width: 90%;
        font-weight: 600;
        color: var(--blue-3);
        font-size: 16px;
        margin-bottom: 10px;
        font-family: 'Inter', sans-serif; 
        padding-top: 10px;
    }
    }
    
    p{
        padding-top: 60px;
        font-family: 'Inter', sans-serif; 
    }
`

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
    font-family: 'Inter', sans-serif; 

`
