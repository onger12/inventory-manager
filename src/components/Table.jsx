
import { Link } from 'react-router-dom';


export const Table = ({ header, products, onDeleteProduct }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>{header.map((th, i) => <th key={i} className="text-center" >{th}</th> )}</tr>
            </thead>
            <tbody>
                {
                    products.map( ({ id, name, description, sale_value, stock, codigo, }) => (
                            <tr key={ id }>
                                <td className="text-center">{ codigo }</td>
                                <td className="text-center">{ name }</td>
                                <td className="text-center">{ description }</td>
                                <td className="text-center">{ sale_value }</td>
                                <td className="text-center">{ stock }</td>
                                <td className="text-center">
                                    <Link to={`/editar-producto/${ id }`} className="btn btn-warning mx-2">
                                        Editar
                                    </Link >
                                    <button onClick={ () => onDeleteProduct( id ) } className="btn btn-danger">
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