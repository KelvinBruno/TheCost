import { useState } from "react"
import { BtnRegistroMeta, Meta } from "./style.module"

const [objetivo, setObjetivo] = useState([])

const Metas = () => {
    return(
        <>
            {objetivo.length > 0 ? objetivo.map((item) => (
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

