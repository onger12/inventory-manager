import React from 'react'
import { useForm } from '../hooks/useForm';

export const ProductForm = ({ initialValue, onSubmitForm, }) => {

    const { 
        name, 
        description, 
        sale_value, 
        single_cost, 
        stock, 
        checkpoint, 
        codigo, 
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
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="descripcion"
                    name="description" 
                    aria-describedby="basic-addon2" 
                    required 
                    onChange={ onChangeInput }
                    value={ description }
            />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Descripcion</span>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Valor de venta</span>
                </div>
                <input 
                    className="form-control" 
                    type="number" 
                    name="sale_value" 
                    aria-describedby="basic-addon1" 
                    placeholder="Valor de venta"
                    required 
                    onChange={ onChangeInput }
                    value={ sale_value }
                />
            </div>

            <div className="input-group mb-3">
                <input 
                    className="form-control"  
                    type="number" 
                    name="single_cost" 
                    aria-describedby="basic-addon2" 
                    placeholder="costo unitario"
                    required 
                    onChange={ onChangeInput }
                    value={ single_cost }
                />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Costo unitario</span>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Existencia</span>
                </div>
                <input 
                    className="form-control" 
                    type="number" 
                    name="stock" 
                    aria-describedby="basic-addon1" 
                    placeholder="existencia"
                    required 
                    onChange={ onChangeInput }
                    value={ stock }
                />
            </div>

            <div className="input-group mb-3">
                <input 
                    className="form-control" 
                    type="number" 
                    placeholder="punto de reorden"
                    name="checkpoint" 
                    aria-describedby="basic-addon2" 
                    required 
                    onChange={ onChangeInput }
                    value={ checkpoint }
                />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Punto de reorden</span>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Codigo</span>
                </div>
                <input 
                    className="form-control" 
                    type="number" 
                    placeholder="codigo"
                    name="codigo" 
                    aria-describedby="basic-addon1"
                    required 
                    onChange={ onChangeInput }
                    value={ codigo }
                />
            </div>

            <button
                className="btn btn-primary btn-terminar"
            >
                    Terminar edicion
            </button>
        </form>
    )
}
