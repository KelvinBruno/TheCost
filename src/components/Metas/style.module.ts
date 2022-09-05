import styled from "styled-components";
import { BtnNovoRegistro, Label } from "../../styles/global";

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

    .centralize-header-metas{
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

    .centralize-metas{
        width: 90%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        padding-top: 20px;
        padding-bottom: 20px;
        gap: 10px;
        border-bottom: none;

        h3{
        font-weight: 600;
        color: var(--blue-2);
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        }
    }
    
    span{
        text-align: center;
        font-weight: 600;
        color: var(--blue-1);
        font-size: 16px;
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



