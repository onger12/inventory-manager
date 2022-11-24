



export const productsReducer = ( initialState = [], action) => {
    switch ( action.type ) {
        case '[PRODUCT] add product' :
            return [ action.payload, ...initialState ];
        case '[PRODUCT] delete product' :
            return initialState.filter( product => product.id !== action.payload );
        case '[PRODUCT] delete all products' :
            return []
        case '[PRODUCT] patch product' :
            return initialState.map( ( todo ) => todo.id === action.payload.id ? ( action.payload ) : ( todo ) );
        default:
            return initialState;
    }
}