import { useState } from "react";


export const useForm = ( initialState ) => {

    const [ formState, setformState ] = useState( initialState );

    const onChangeInput = ({ target }) => {
        const { value, name } = target;
        setformState({
            ...formState,
            [ name ] : value,
        })
    }

    return {
        ...formState,
        formState,
        onChangeInput,
    }
}