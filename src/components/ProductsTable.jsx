

export const ProductsTable = ({ payload }) => {

    const {
        header, 
        productsAdded = [], 
        onRemoveProduct,
        onChangeCantidad
    } = payload;

    console.log(productsAdded)
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>{header.map((th, i) => <th key={i} className="text-center" >{th}</th> )}</tr>
            </thead>
            <tbody>
                {
                    productsAdded.map( ({ id, name, description, sale_value, stock, codigo, }) => (
                            <tr key={ name } className="text-center">
                                <td>{ codigo }</td>
                                <td>{ name }</td>
                                <td>{ stock }</td>
                                <td>
                                    <input className="form-control" type="number" onChange={ ( e ) => onChangeCantidad( e, id ) } />
                                </td>
                                <td>
                                    <button onClick={ () => onRemoveProduct( id ) } className="btn btn-danger">
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