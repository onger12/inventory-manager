import React from 'react'
import { useForm } from '../hooks/useForm';

export const ClientForm = ({ initialValue, onSubmitForm, }) => {

    const { 
        name,
        dni,
        phone,
        address,
        city,
        onChangeInput,
        formState
    } = useForm( initialValue );

    return (
        <form className="text-center" onSubmit={ ( e ) => onSubmitForm( e, formState ) }>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                </div>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="nombre"
                    name="name" 
                    aria-describedby="basic-addon1" 
                    autoFocus 
                    required 
                    onChange={ onChangeInput }
                    value={ name }
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Cedula</span>
                </div>
                <input 
                    className="form-control" 
                    type="number" 
                    name="dni" 
                    aria-describedby="basic-addon1" 
                    placeholder="cedula"
                    required 
                    onChange={ onChangeInput }
                    value={ dni }
                />
            </div>

            <div className="input-group mb-3">
                <input 
                    className="form-control"  
                    type="number" 
                    name="phone" 
                    aria-describedby="basic-addon2" 
                    placeholder="telefono"
                    required 
                    onChange={ onChangeInput }
                    value={ phone }
                />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Telefono</span>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Direccion</span>
                </div>
                <input 
                    className="form-control" 
                    type="text" 
                    name="address" 
                    aria-describedby="basic-addon1" 
                    placeholder="direccion"
                    required 
                    onChange={ onChangeInput }
                    value={ address }
                />
            </div>

            <div className="input-group mb-3">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="ciudad"
                    name="city" 
                    aria-describedby="basic-addon2" 
                    required 
                    onChange={ onChangeInput }
                    value={ city }
                />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Ciudad</span>
                </div>
            </div>

            <button
                className="btn btn-primary btn-terminar"
            >
                    Terminar
            </button>
        </form>
    )
}
