import { useContext, useEffect, useState } from "react";
import { RegistroGastosContext } from "../../Contexts/RegistroGastosContext";

import { ResumoDiv, DespesasResumoTitulo } from "./style.module";
import { IGastos } from "../../Contexts/RegistroGastosContext";

interface IReceitasProps {
  acc: number;
  gasto: IGastos[];
}

function Resumo() {
  const { gastos } = useContext(RegistroGastosContext);

  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);

  useEffect(() => {
    function resumoTotal() {
      setReceita(0);
      setDespesa(0);

      gastos.map((gasto) => {
        gasto.type === "Despesa"
          ? setDespesa(despesa + gasto.value)
          : setReceita(receita + gasto.value);
      });
    }
    resumoTotal();
  }, []);

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
          {(receita - despesa ).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ResumoDiv>
    </>
  );
}

export default Resumo;
