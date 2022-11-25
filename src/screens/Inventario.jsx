import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../components';
import { AppContext } from '../contexts';

export const Inventario = () => {

    const { productsHookValue } = useContext( AppContext );    
    const { products, onDeleteProduct } = productsHookValue

    const header = ["Codigo", "Nombre", "Descripcion", "Precio", "Cantidad", "Acciones"]

    return (
        <div className="my-3">
            <div className="my-3">
                <h2>Inventario</h2>  
                <hr />
            </div>
            <div className="text-end my-4">
                <Link className="btn btn-primary" to="/crear-producto" >Nuevo</Link>
            </div>
            <Table 
                payload={{ products, header, onDeleteProduct }}
            />
        </div>
    )
}