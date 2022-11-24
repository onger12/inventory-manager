import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from "../components/ProductForm";
import { AppContext } from "../contexts/products/appContext"

export const EditarProducto = () => {

    const { onPatchProduct } = useContext( AppContext );
    const navigate = useNavigate();
    const { id } = useParams();

    const product = JSON.parse( localStorage.getItem('products') ).find( ( product ) => product.id === id)

    const onSubmitForm = ( e, formState ) => {
        e.preventDefault();
        onPatchProduct( formState );
        navigate( "/inventario" );
    }

    const initialValue = { ...product }

    return (

        <div className="container my-2">
            <h1>Editar producto</h1>
            <hr />
            <ProductForm initialValue={ initialValue } onSubmitForm={ onSubmitForm } />
        </div>
    )
    
}
