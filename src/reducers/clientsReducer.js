



export const clientsReducer = ( initialState = [], action) => {
    switch ( action.type ) {
        case '[CLIENT] add client' :
            return [ action.payload, ...initialState ];
        case '[CLIENT] delete client' :
            return initialState.filter( client => client.id !== action.payload );
        case '[CLIENT] delete all clients' :
            return []
        case '[CLIENT] patch client' :
            return initialState.map( ( todo ) => todo.id === action.payload.id ? ( action.payload ) : ( todo ) );
        default:
            return initialState;
    }
}