import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    width: 750px;
    height: 450px;

    border-radius: 8px;
    background-color: var(--white);
  }
`;
export const Ul = styled.ul`
  width: 16rem;
  height: 20rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-content: center;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 18rem;
    height: 2.5rem;

    border-radius: 0.3rem;
    list-style: none;
    background-color: #e7e7e7;
    margin: 1rem 0 0 -2.5rem;
    padding-right: 0.4rem;

    section {
      font-size: 15px;
      font-weight: 500;
      margin-left: 0.4rem;
      border-radius: 0.3rem;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .category {
        width: 30%;
        font-weight: bold;
      }
    }
    .editar {
      width: 8%;
      margin-right: 0.4rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 90%;
    height: 80%;

    border-radius: 8px;
    li {
      width: 103%;

      section {
        width: 35%;
      }
    }
  }
`;
export const P = styled.p`
  color: ${(props) => props.color || "black"};
  font-weight: 500;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
