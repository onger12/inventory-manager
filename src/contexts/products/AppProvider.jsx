

import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import { AppContext } from './appContext'

export const AppProvider = ({ children }) => {

    const productHookValue = useProducts();

    return (
        <AppContext.Provider value={{ ...productHookValue }}>
            { children }
        </AppContext.Provider>
    )
}
