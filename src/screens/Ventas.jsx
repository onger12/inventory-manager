
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsTable } from "../components/ProductsTable";
import { AppContext } from "../contexts";
import { useSingleSale } from "../hooks/useSingleSale";


const header = [ "Codigo", "Nombre", "Stock", "Cantidad", "Accion" ]

export const Ventas = () => {

    const navigate = useNavigate()

    const [ client, setClient ] = useState( {} );
    const [ cantidadProductos, setCantidadProductos ] = useState({});
    const { name, dni, address, phone } = client;
    
    const { productsHookValue, clientsHookValue, salesHookValue } = useContext( AppContext );

    const { products, onPatchProduct } = productsHookValue;
    const { clients } = clientsHookValue;
    const { onCreateSale } = salesHookValue;

    const { clientName, productsAdded, onAddProduct, onChangeSelect, onRemoveProduct, _onPatchProduct } = useSingleSale({ clientName : clients[0].name, });

    useEffect( () => {
        const client = clients.find( client => client.name === clientName)
        setClient( client )
    }, [ clientName ])

    const onChangeCantidad = ( e, id) => {
        const { value } = e.target;
        if( value === 0 || value === ' ') return
        _onPatchProduct( id, value);
    }

    const terminarVenta = () => {
        const venta = {
            clientName,
            productsAdded,
        }
        productsAdded.forEach( product => {
            onPatchProduct( product );
            console.log('first')
        })
        onCreateSale( venta );

        navigate('/registros')
    }



    return(
        <div className="my-3" >
            <h1>Venta</h1>
            <div className="d-flex justify-content-between text-center align-items-center">
                <div>
                    <h3>Datos de facturación:</h3>
                    <form>
                        <select className="form-select" onChange={ onChangeSelect }>
                            {
                                clients.map(client => <option key={client.id}>{ client.name }</option>)
                            }
                        </select>
                    </form>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <b>Cliente</b>
                        <hr />
                        <div className="border p-4">
                            <p className="mx-1">{ name }</p>
                            <p className="mx-1"><b>CC</b> { dni }</p>
                            <p className="mx-1"><b>Cel</b> { phone }</p>
                            <p className="mx-1"><b>Dir</b> { address }</p>
                        </div>
                    </div>
                    <div className="mx-4">
                        <button className="btn btn-primary" onClick={ terminarVenta }>Terminar venta</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div>
                <p>Seleccione los productos:</p>
                <select className="form-select my-5" onChange={ onAddProduct }>
                    {
                        products.map( product => <option key={ product.id }>{ product.name }</option>)
                    }
                </select>
                <ProductsTable payload={{ header, productsAdded, onRemoveProduct, onChangeCantidad}}/>
            </div>
        </div>
    )
}