import { useContext, useState } from "react"
import { RegistryTable } from "../components/RegistryTable"
import { AppContext } from "../contexts/AppContext"

const header = ["Cliente", "Productos", "Cantidad", "Valor total"]

export const Registros = () => {
    
    const { salesHookValue } = useContext( AppContext )

    const { sales } = salesHookValue;


    return (
        <div className="container">
            <RegistryTable payload={{ sales, header }} />
        </div>
    )
}