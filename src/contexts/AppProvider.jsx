

import React from 'react'
import { useProducts, useClients } from '../hooks'
import { AppContext } from './appContext'

export const AppProvider = ({ children }) => {

    const productsHookValue = useProducts();
    const clientsHookValue = useClients();

    return (
        <AppContext.Provider 
            value={{ 
                    productsHookValue : { ...productsHookValue },
                    clientsHookValue : { ...clientsHookValue },
            }}
        >
            { children }
        </AppContext.Provider>
    )
}
