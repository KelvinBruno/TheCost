import styled from "styled-components";

export const Container = styled.div`
    .menu img{
        position: absolute;
        top: 20px;
        right: 20px;
        height: 60px;
        width: 65px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }

    @media only screen and (min-width: 1024px) {
    .menu img {
        right: 80px;
    }
}
`

export const DropDownMenu = styled.div`
    .drop{
        position: absolute;
        top: 100px;
        right: 20px;
        background-color: var(--white);
        border-radius: 8px;
        width: 170px;
    }

    .drop::before{
        content: "";
        position: absolute;
        top: -5px;
        right: 20px;
        height: 20px;
        width: 20px;
        background-color: var(--white);
        transform: rotate(45deg);
    }

    .drop ul li:a{
        color: var(--blue-2);
        cursor: pointer;
    }

    .drop ul li{
        display: flex;
        gap: 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .drop.active{
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        transition: 500ms ease;
    }

    .drop.inactive{
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: 500ms ease;
    }

    .drop-item{
        padding-left: 20px;
        padding-right: 20px;
    }

    @media only screen and (min-width: 1024px) {
    .drop {
        right: 80px;
    }
    
    ul{
        list-style: none;
    }
   
    h3{
        width: 100%;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        margin: 5px 0;
    }

    h3:hover{
        color: var(--blue-1)
    }
`
