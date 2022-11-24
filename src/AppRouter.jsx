import { Navigate, Route, Routes } from "react-router-dom"
import { Clientes, Inicio, Ventas, Inventario, Registros } from "./screens"
import { CrearProducto } from "./screens/CrearProducto"
import { EditarProducto } from "./screens/EditarProducto"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="ventas" element={ <Ventas /> } />
            <Route path="inventario" element={ <Inventario /> } />
            <Route path="clientes" element={ <Clientes /> } />
            <Route path="registros" element={ <Registros /> } />

            <Route path="crear-producto" element={ <CrearProducto /> } />
            <Route path="editar-producto/:id" element={ <EditarProducto /> } />


            <Route path="/*" element={ <Navigate to="/" />} />
        </Routes>
    )
}
