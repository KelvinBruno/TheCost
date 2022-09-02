import { useState } from "react"
import { BtnRegistroMeta, Meta } from "./style.module"

const [objetivo, setObjetivo] = useState([])

const Metas = () => {

    return(
        <>
            {objetivo.length > 0 ? objetivo.map((item) => (
                <Meta>
                    <div className="centralize-header-metas">
                        <h2>Meta</h2>
                        <BtnRegistroMeta>Novo Registro</BtnRegistroMeta>
                    </div>
                    <div className="centralize-metas">
                        <h3>Objetivo: </h3>
                        <h3>Valor: </h3>
                        <h3>Guardado: </h3>
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

