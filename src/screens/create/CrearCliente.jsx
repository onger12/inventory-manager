import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ClientForm } from '../../components';
import { AppContext } from '../../contexts';

export const CrearCliente = () => {

    const { clientsHookValue } = useContext( AppContext );
    const { onCreateClient } = clientsHookValue;

    const navigate = useNavigate();

    const onSubmitForm = ( e, formState ) => {
        e.preventDefault();
        onCreateClient( formState );
        navigate( "/clientes" );
    }

    const initialValue = {
        name : '',
        dni : '',
        phone : '',
        address : '',
        city : '',
    }

    return (

        <div className="container my-2">
            <h1>Crear nuevo cliente</h1>
            <hr />
            <ClientForm initialValue={ initialValue } onSubmitForm={ onSubmitForm } />
        </div>
    )
    
}
