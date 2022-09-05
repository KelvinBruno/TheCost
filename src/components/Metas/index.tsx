import { useContext } from "react"
import { MetaContext } from "../../contexts/MetasContext"
import { BtnRegistroMeta, Meta } from "./style.module"

function Metas() {
    const { metas } = useContext(MetaContext)
    
    return(
        <>
            {metas.length > 0 ? metas.map((item) => (
                <Meta>
                    <div className="centralize-header-metas">
                        <h2>Meta</h2>
                        <BtnRegistroMeta>Novo Registro</BtnRegistroMeta>
                    </div>
                    <div className="centralize-metas">
                        <h3>Objetivo: {item.objetivo} </h3>
                        <h3>Valor: {item.value} </h3>
                        <h3>Guardado: {item.done} </h3>
                    </div>
                    <span>{}% Atingido</span>
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

