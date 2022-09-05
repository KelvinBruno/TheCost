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
  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius: 12px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 17.5rem;
    height: 2.8rem;

    border-radius: 0.3rem;
    list-style: none;
    background-color: #e7e7e7;
    margin: 1rem 0 0 -2.5rem;
    padding-right: 0.4rem;
    :hover {
      background-color: rgba(231, 231, 231, 0.5);
    }
    section {
      font-size: 15px;
      font-weight: 500;
      margin-left: 0.4rem;
      border-radius: 0.3rem;
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .category {
        width: 3rem;
        p {
          display: none;
        }
      }
      p {
        width: 100%;
        text-align: start;
      }
    }
    .editar {
      display: none;
    }
    .date {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    width: 90%;
    height: 90%;

    border-radius: 8px;
    li {
      width: 100%;
      height: 3rem;

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
          p {
            display: flex;
          }
        }
        p {
          width: 50%;
        }
      }
      .editar {
        display: flex;
        width: 8%;
        margin-right: 0.4rem;
      }
      .date {
        display: flex;
      }
    }
  }
`;
export const P = styled.p`
  color: ${(props) => props.color || "black"};
  font-weight: 500;
  margin-right: 1rem;
`;

export const Header = styled.header`
  width: 90%;
  margin: 0 3.5rem -1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  p:nth-child(2) {
    margin-left: 1.5rem;
  }
  p:nth-child(3) {
    margin-left: 4rem;
  }
  p:nth-child(4) {
    margin-left: 1.5rem;
  }
  p:nth-child(5) {
    margin-right: 1rem;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
