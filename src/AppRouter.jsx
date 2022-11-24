import { Navigate, Route, Routes } from "react-router-dom"
import { Clientes, Inicio, Ventas, Inventario, Registros } from "./screens"
import { CrearProducto } from "./screens/CrearProducto"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="ventas" element={ <Ventas /> } />
            <Route path="inventario" element={ <Inventario /> } />
            <Route path="clientes" element={ <Clientes /> } />
            <Route path="registros" element={ <Registros /> } />

            <Route path="crear-producto" element={ <CrearProducto /> } />

            <Route path="/*" element={ <Navigate to="/" />} />
        </Routes>
    )
}
