import { useEffect, useReducer } from "react"
import { productsReducer } from "../reducers/ProductsReducer"

const initialProducts = JSON.parse(localStorage.getItem('producst'))

export const useProducts = () => {

    const [ products, dispatch ] = useReducer( productsReducer, initialProducts );

    useEffect( () => {
        localStorage.setItem('products', products)
    }, [products] )

    const onCreateProduct = ( product ) => {
        const action = {
            type: '[PRODUCT] add product',
            payload: {
                ...product,
                //TODO: ADD UNIQID HERE
            }
        }
        dispatch( action );
    }

    const onPatchProduct = ( product ) => {
        const action = {
            type: '[PRODUCT] patch product',
            payload: {
                ...product,
            }
        }
        dispatch( action );
    }

    const onDeleteProduct = ( product ) => {
        const action = {
            type: '[PRODUCT] patch product',
            payload: {
                ...product,
            }
        }
        dispatch( action );
    }

    return ({
        products,
        onCreateProduct,
        onDeleteProduct,
        onPatchProduct
    })
}
