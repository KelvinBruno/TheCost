import { useContext } from "react";
import { RegistroGastosContext } from "../../Contexts/RegistroGastosContext";

import { ResumoDiv, DespesasResumoTitulo } from "./style.module";
import { IGastos } from "../../Contexts/RegistroGastosContext";

interface IReceitasProps {
  acc: number;
  gasto: IGastos[];
}

function Resumo() {
  const { gastos } = useContext(RegistroGastosContext);

  return (
    <>
      <ResumoDiv>
        <div className="centralize-header-metas">
          <h2>Resumo</h2>
        </div>
        <div className="centralize-metas">
          <h3>Objetivo: R$ 3.450,00 </h3>
          <DespesasResumoTitulo>Despesas: R$ 3.450,00 </DespesasResumoTitulo>
        </div>
        <span>Recursos disponiveís</span>
        <span>R$ 3.450,00</span>
      </ResumoDiv>
    </>
  );
}

export default Resumo;
