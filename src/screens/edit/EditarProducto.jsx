import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ProductForm } from '../../components';
import { AppContext } from '../../contexts';

export const EditarProducto = () => {

    const { productsHookValue } = useContext( AppContext );
    const { onPatchProduct } = productsHookValue;
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
