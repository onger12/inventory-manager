

import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { ClientsTable } from '../components';
import { AppContext } from '../contexts';

export const Clientes = () => {

    const { clientsHookValue } = useContext( AppContext );    
    const { clients, onDeleteClient } = clientsHookValue;

    const header = ["Nombre", "Identificacion", "Telefono", "Direccion", "Ciudad"]

    return (
        <div className="my-3">
            <div className="my-3">
                <h2>Clientes</h2>  
                <hr />
            </div>
            <div className="text-end my-4">
                <Link className="btn btn-primary" to="/crear-cliente" >Nuevo</Link>
            </div>
            <ClientsTable
                payload={{ clients, header, onDeleteClient }}
            />
        </div>
    )
}