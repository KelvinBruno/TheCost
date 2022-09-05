import styled from "styled-components"
import { Form, Input, Label } from "../../styles/global"

export const Modal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 87%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
    margin-right: 2%;
    @media (min-width: 590px) {
        width: 100%;
    }
`

export const ComponenteModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 369px;
    box-shadow: 0px 4px 40px -10px #00000040;
`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 8px 18px;
    border-radius: 4px 4px 0px 0px;
    background-color: var(--blue-2);
`

export const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--white);
`

export const BotaoFechar = styled.button`
    display: flex;
    height: 32px;
    width: 32px;
    align-items: center;
    justify-content: center;

    color: var(--white);
    background-color: transparent;
    border: none;

    :hover{
        cursor: pointer;
    }
`

export const FormModal = styled(Form)`
    width: 90%;
    max-width: 100%;
    padding-top: 17px;
    border-radius: 0px 0px 4px 4px;
`

export const InputsGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`

export const Select = styled.select`
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
    margin-top: 10px;

    :focus{
        box-shadow: 0 0 0 0;
        border: none;
        outline: 0;
    }
`

export const SelectTipo = styled.select`
    width: 30%;
`

export const SelectCategoria = styled.select`
    width: 65%;
`

export const InputData = styled(Input)`
    margin-top: 10px;
    width: 40%;
`

export const InputValor = styled(Input)`
    width: 50%;
`

export const LabelModal = styled(Label)`
    width: auto;
`

export const ContainerInputGroup = styled.div`
    min-width: 100%;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    @media (min-width: 445px){
        margin-top: 10px;
        min-width: 50%;
    }
    
`