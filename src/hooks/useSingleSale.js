import { useState } from "react"


export const useSingleSale = ( initialValue ) => {

    const [ clientName, setClientName ] = useState( initialValue.clientName )
    const [ productsAdded, setProductsAdded ] = useState( [] );

    const onChangeSelect = ({ target }) => {
        const { value } = target;

        setClientName( value );
    }

    const onAddProduct = ({ target }) => {
        const { value } = target;

        const product = JSON.parse(localStorage.getItem('products')).find( product => product.name === value );

        setProductsAdded([
            ...productsAdded,
            product
        ])
    }

    const onRemoveProduct = ( id ) => {
        setProductsAdded( [ ...productsAdded.filter( prod => prod.id !== id)] )
    }

    const _onPatchProduct = ( id, cantidad ) => {
        const _product = productsAdded.find( product => product.id === id)
        _product.stock = _product.stock - cantidad
        _product.cantidad = cantidad
        const products = productsAdded.filter( product => product.id !== id)
        setProductsAdded([ ...products, _product])
    }

    return({
        clientName,
        onChangeSelect,
        productsAdded,
        onAddProduct,
        onRemoveProduct,
        _onPatchProduct
    })
}