import styled from "styled-components";
import { Form, Label, Input } from "../../styles/global";

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  @media (min-width: 641px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Header = styled.header`
  position: sticky;
  width: 100%;
  height: 9%;
  margin-bottom: 1rem;
  background-color: #053770;
  img {
    width: 8rem;
    height: 3rem;
    margin: auto;
  }
  @media (min-width: 641px) {
    display: none;
  }
`;

export const Label1 = styled(Label)`
  font-size: 15px;
`;

export const Input1 = styled(Input)`
  height: 2rem;
`;

export const Form1 = styled(Form)`
  position: sticky;
  width: 18rem;
  h1 {
    font-size: 25px;
  }

  label {
    font-weight: 700;
    width: 100%;
    margin-top: 5px;
    text-align: start;
  }

  input {
    margin-bottom: 5px;
  }

  @media (max-width: 700px) {
    width: 15rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 50%;
  img {
    width: 70%;
  }
  p {
    width: 70%;
    margin-bottom: 39px;
    font-size: 25px;
    color: #fbfbfb;
    font-weight: 500;
  }
  @media (max-width: 641px) {
    display: none;
  }
  @media (min-width: 1000px) {
    img {
      width: 50%;
    }
    p {
      width: 50%;
    }
  }
`;

export const Divpai = styled.div`
  background-color: #279fd8;
  width: 100vw;
  height: 100vh;

  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: block;
    float: right;
    span {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.2);
      animation: animate 25s linear infinite;
      bottom: -150px;
    }
    span:nth-child(1) {
      left: 25%;
      width: 80px;
      height: 80px;
      animation-delay: 0s;
    }
    span:nth-child(2) {
      left: 10%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
    }
    span:nth-child(3) {
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
    }
    span:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
    }
    span:nth-child(5) {
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
    }
    span:nth-child(6) {
      left: 75%;
      width: 110px;
      height: 110px;
      animation-delay: 3s;
    }
    span:nth-child(7) {
      left: 35%;
      width: 150px;
      height: 150px;
      animation-delay: 7s;
    }

    span:nth-child(8) {
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
    }

    span:nth-child(9) {
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
    }

    span:nth-child(10) {
      left: 85%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 11s;
    }

    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 2rem;
      }

      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 0;
      }
    }
  }
  @media (min-width: 641px) {
    background-color: #053770;
  }
`;

export const P2 = styled.p`
  color: #fbfbfb;
`;

export const P = styled.p`
  color: #279fd8;
  width: 100%;
  margin-top: -1rem;
  margin-right: 7rem;
  @media (min-width: 700px) {
    margin-right: 11rem;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 641px) {
    width: 50%;
  }
`;
