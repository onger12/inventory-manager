import { useEffect, useReducer } from 'react';
import { productsReducer } from '../reducers/productsReducer';

import uniqid from 'uniqid';

const init = () => {
    return JSON.parse( localStorage.getItem('products') );
}

const initialProducts = JSON.parse(localStorage.getItem('producst'))

export const useProducts = () => {

    const [ products, dispatch ] = useReducer( productsReducer, [], init );

    useEffect( () => {
        localStorage.setItem('products', JSON.stringify( products ))
        console.log(products)
    }, [products] )

    const onCreateProduct = ( product ) => {
        const action = {
            type: '[PRODUCT] add product',
            payload: {
                ...product,
                id : uniqid()
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

    const onDeleteProduct = ( id ) => {
        const action = {
            type: '[PRODUCT] delete product',
            payload: id
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
