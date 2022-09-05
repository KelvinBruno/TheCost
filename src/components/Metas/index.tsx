import { useContext } from "react"
import { MetaContext } from "../../contexts/MetasContext"
import { BtnRegistroMeta, Meta } from "./style.module"


function Metas() {
    const { metas } = useContext(MetaContext)

    return(
        <>
            {metas.length > 0 ? metas.map((item) => (
                <Meta>
                    <div>
                        <h2>Meta</h2>
                        <BtnRegistroMeta>Novo Registro</BtnRegistroMeta>
                    </div>
                    <p>Objetivo: {item.objetivo}</p>
                    <span>Valor: {item.value}</span>
                    <span>Guardado: {item.done}</span>
                    <h2>{}% Atingido</h2>
                </Meta>
            )) : (
                <Meta>
                    <div>
                        <h2>Meta</h2>
                        <BtnRegistroMeta>Novo Registro</BtnRegistroMeta>
                    </div>
                </Meta>
            )}
        </>
    )
}

export default Metas

