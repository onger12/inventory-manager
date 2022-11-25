import { useEffect, useReducer } from 'react';
import { clientsReducer } from '../reducers/clientsReducer';

import uniqid from 'uniqid';

const init = () => {
    return JSON.parse( localStorage.getItem('clients') );
}

export const useClients = () => {

    const [ clients, dispatch ] = useReducer( clientsReducer, [], init );

    useEffect( () => {
        localStorage.setItem('clients', JSON.stringify( clients ))
        console.log(clients)
    }, [clients] )

    const onCreateClient = ( client ) => {
        const action = {
            type: '[CLIENT] add client',
            payload: {
                ...client,
                id : uniqid()
            }
        }
        dispatch( action );
    }

    const onPatchClient = ( client ) => {
        const action = {
            type: '[CLIENT] patch client',
            payload: {
                ...client,
            }
        }
        dispatch( action );
    }

    const onDeleteClient = ( id ) => {
        const action = {
            type: '[CLIENT] delete client',
            payload: id
        }
        dispatch( action );
    }

    return ({
        clients,
        onCreateClient,
        onDeleteClient,
        onPatchClient
    })
}
