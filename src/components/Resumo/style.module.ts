import styled from "styled-components";

import { Meta } from "../Metas/style.module";

export const ResumoDiv = styled(Meta)`
  margin-bottom: 1rem;
  @media (min-width: 1200px) {
    width: 300px;
  }
`;

export const DespesasResumoTitulo = styled.h2`
  margin: 5px 0;
  font-weight: 600;
  color: #ff0000;
  font-size: 14px;
  font-family: "Inter", sans-serif;
`;
