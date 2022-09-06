import { useContext } from "react";
import { MetaContext } from "../../Contexts/MetasContext";
import { BtnRegistroMeta, Meta } from "./style.module";

function Metas() {
  const { metas } = useContext(MetaContext);

  return (
    <>
      {metas.length > 0 ? (
        metas.map((item) => (
          <Meta key={item.id}>
            <div className="centralize-header-metas">
              <h2>Meta</h2>
            </div>
            <div className="centralize-metas">
              <h3>Objetivo: {item.objetivo} </h3>
              <h3>
                Valor:{" "}
                {item.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </h3>
              <h3>
                Guardado:{" "}
                {item.done.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
              </h3>
            </div>
            <span>{item.done / (item.value / 100)}% Atingido</span>
          </Meta>
        ))
      ) : (
        <Meta>
          <div>
            <h2>Meta</h2>
            <BtnRegistroMeta>Novo Registro</BtnRegistroMeta>
          </div>
        </Meta>
      )}
    </>
  );
}

export default Metas;
