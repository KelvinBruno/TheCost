import { useContext, useEffect, useState } from "react";
import { MetaContext } from "../../Contexts/MetasContext";
import { IsOpenModalContext } from "../../Contexts/ModalContext";
import { BtnEditarMeta, BtnRegistroMeta, Meta } from "./style.module";

function Metas() {
  const { metas, carregaMeta } = useContext(MetaContext);
  const {
    OpenModalEditMeta,
    OpenModalMeta,
    setOpenModalEditMeta,
    setOpenModalMeta,
    setDataMeta,
    setIdMeta,
  } = useContext(IsOpenModalContext);
  const [metasLista, setMetasLista] = useState(metas);

  carregaMeta();
  useEffect(() => {
    setMetasLista(metas);
  }, [metas]);

  return (
    <>
      {metasLista.length === 0 ? (
        <Meta>
          <div>
            <h2>Meta</h2>

            <BtnRegistroMeta
              onClick={() => {
                setOpenModalMeta(!OpenModalMeta);
              }}
            >
              Nova Meta
            </BtnRegistroMeta>
          </div>
        </Meta>
      ) : (
        metas.map((item) => {
          const porcentagem = item.done / (item.value / 100);

          return (
            <Meta>
              <div className="centralize-header-metas">
                <h2>Meta</h2>
                <BtnEditarMeta
                  onClick={() => {
                    setDataMeta(item);
                    setIdMeta(item.id);
                    setOpenModalEditMeta(!OpenModalEditMeta);
                  }}
                >
                  Editar Meta
                </BtnEditarMeta>
              </div>
              <div className="centralize-metas">
                <h3>Objetivo: {item.objetivo} </h3>
                <h3>
                  Valor:{""}
                  {item.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                </h3>
                <h3>
                  Guardado:{""}
                  {item.done.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                </h3>
              </div>
              <span>{porcentagem}% Atingido</span>
            </Meta>
          );
        })
      )}
    </>
  );
}

export default Metas;
