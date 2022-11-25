import { useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { ClientForm } from '../../components';
import { AppContext } from '../../contexts';

export const EditarCliente = () => {

    const { clientsHookValue } = useContext( AppContext );
    const { onPatchClient } = clientsHookValue;

    const navigate = useNavigate();
    const { id } = useParams();

    const client = JSON.parse( localStorage.getItem('clients') ).find( ( client ) => client.id === id)

    const onSubmitForm = ( e, formState ) => {
        e.preventDefault();
        onPatchClient( formState );
        navigate( "/clientes" );
    }

    const initialValue = { ...client }

    return (

        <div className="container my-2">
            <h1>Editar cliente</h1>
            <hr />
            <ClientForm initialValue={ initialValue } onSubmitForm={ onSubmitForm } />
        </div>
    )
    
}
