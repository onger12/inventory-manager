
import { useEffect, useReducer } from 'react';
import { salesReducer } from '../reducers';

import uniqid from 'uniqid';

const init = () => {
    return JSON.parse( localStorage.getItem('sales') );
}

export const useSales = () => {

    const [ sales, dispatch ] = useReducer( salesReducer, [], init );

    useEffect( () => {
        localStorage.setItem('sales', JSON.stringify( sales ))
    }, [sales] )

    const onCreateSale = ( sale ) => {
        const { clientName, productsAdded } = sale

        if( productsAdded.length === 0) return

        const action = {
            type: '[SALE] add sale',
            payload: {
                clientName,
                products : JSON.stringify(productsAdded),
                id : uniqid()
            }
        }
        dispatch( action );
    }

    return ({
        sales,
        onCreateSale,
    })
}
