
import { Link } from 'react-router-dom';


export const ClientsTable = ({ payload }) => {

    const {
        header, 
        clients, 
        onDeleteClient
    } = payload;
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>{header.map((th, i) => <th key={i} className="text-center" >{th}</th> )}</tr>
            </thead>
            <tbody>
                {
                    clients.map( ({ id, name, dni, phone, address, city, }) => (
                            <tr key={ id }>
                                <td className="text-center">{ name }</td>
                                <td className="text-center">{ dni }</td>
                                <td className="text-center">{ phone }</td>
                                <td className="text-center">{ address }</td>
                                <td className="text-center">{ city }</td>
                                <td className="text-center">
                                    <Link to={`/editar-cliente/${ id }`} className="btn btn-warning mx-2">
                                        Editar
                                    </Link >
                                    <button onClick={ () => onDeleteClient( id ) } className="btn btn-danger">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                    ))
                }
            </tbody>
        </table>
    )
}