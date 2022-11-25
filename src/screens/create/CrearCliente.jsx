import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { ProductForm } from "../../components";
import { AppContext } from "../../contexts"

export const CrearCliente = () => {

    const { onCreateProduct } = useContext( AppContext );
    const navigate = useNavigate();

    const onSubmitForm = ( e, formState ) => {
        e.preventDefault();
        onCreateProduct( formState );
        navigate( "/inventario" );
    }

    const initialValue = {
        name : '',
        description : '',
        sale_value : '',
        single_cost : '',
        stock : '',
        checkpoint : '',
        codigo : '',
    }

    return (

        <div className="container my-2">
            <h1>Crear nuevo producto</h1>
            <hr />
            <ProductForm initialValue={ initialValue } onSubmitForm={ onSubmitForm } />
        </div>
    )
    
}
