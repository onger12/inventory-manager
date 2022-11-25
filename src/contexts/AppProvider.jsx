

import React from 'react'
import { useProducts, useClients, useSales } from '../hooks'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }) => {

    const productsHookValue = useProducts();
    const clientsHookValue = useClients();
    const salesHookValue = useSales();

    return (
        <AppContext.Provider 
            value={{ 
                    productsHookValue : { ...productsHookValue },
                    clientsHookValue : { ...clientsHookValue },
                    salesHookValue : { ...salesHookValue },
            }}
        >
            { children }
        </AppContext.Provider>
    )
}
