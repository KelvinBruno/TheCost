import { useContext, useEffect, useState } from "react";
import { RegistroGastosContext } from "../../Contexts/RegistroGastosContext";

import { ResumoDiv, DespesasResumoTitulo } from "./style.module";

function Resumo() {
  let { receita, despesa } = useContext(RegistroGastosContext);

  return (
    <>
      <ResumoDiv>
        <div className="centralize-header-metas">
          <h2>Resumo</h2>
        </div>
        <div className="centralize-metas">
          <h3>
            Receitas:{" "}
            {receita.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <DespesasResumoTitulo>
            Despesas:{" "}
            {despesa.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </DespesasResumoTitulo>
        </div>
        <span>Recursos disponiveís</span>
        <span>
          {(receita - despesa).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ResumoDiv>
    </>
  );
}
export default Resumo;
