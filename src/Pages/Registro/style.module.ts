import styled from "styled-components"
import { Label, Input, Form } from "../../styles/global"

export const Header = styled.header`
    width: 100%;
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--blue-2);
    font-family: 'Inter', sans-serif;

    .centralize-logo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
    }

    .icon{
        color: var(--white);
        padding-right: 15px;
        cursor: pointer;
    }

    h2{
        color: var(--white);
    }
`

export const Container = styled.div`
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    background-color: var(--blue-0);
`

export const FormRegistro = styled(Form)`      
    width: 15rem;
    height: auto;
    border-radius: 16px;
    background-color: var(--blue-3);

    label{
        text-align: start;
        width: 100%;
    }

    h2{
        font-size: 28px;
        font-weight: 700;

        color: var(--white);
        font-family: 'Inter', sans-serif;
    }

    @media only screen and (min-width: 768px) {
        width: 18rem;  
    }
`

export const Centralize = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LabelForm = styled(Label)`
    margin: 10px;
    padding-bottom: 5px;

    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter', sans-serif; 
`

export const InputForm = styled(Input)`
    width: 100%;
    height: 2.3rem;
    background-color: var(--white); 
`