

export const RegistryTable = ({ payload }) => {

    const {
        header,
        sales
    } = payload;
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>{header.map((th, i) => <th key={i} className="text-center" >{th}</th> )}</tr>
            </thead>
            <tbody>
                {
                    sales.map( ({ id, clientName, products }) => {
                        if(!products) return ''
                        const prods = JSON.parse( products );
                        return(
                            <tr key={ id } className="text-center">
                                <td>{ clientName }</td>
                                <td>{ prods.map( prod => <p><b>{prod.name}</b></p>) }</td>
                                <td>{ prods.map( prod => <p>{prod.cantidad}</p>) }</td>
                                <td>
                                    { prods.map( prod => prod.cantidad * prod.sale_value)}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}