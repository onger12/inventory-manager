

export const salesReducer = ( initialState = [], action) => {
    switch ( action.type ) {
        case '[SALE] add sale' :
            return [ action.payload, ...initialState ];
        default:
            return initialState;
    }
}