

import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import { ProductsContext } from './ProductsContext'

export const ProductsProvider = ({ children }) => {

    const productHookValue = useProducts();

    return (
        <ProductsContext.Provider value={{ ...productHookValue }}>
            { children }
        </ProductsContext.Provider>
    )
}
