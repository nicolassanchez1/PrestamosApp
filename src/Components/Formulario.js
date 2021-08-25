import React, { Fragment, useState } from 'react';
import {CalcularTotal} from '../Helpers'
const Formulario = (props) => {

    const { cantidad, guardarcantidad, plazo, guardarPlazo, total, guardarTotal, guardarSpinner } = props
    const [error, guardarError] = useState(false)
    console.log(total)

    const enviarSubmit = (e) => {
        e.preventDefault();
        // console.log('Enviado submit')
        //Validar form
        if (cantidad === 0 || plazo === '') {
            guardarError(true)
            return;
        }

        //Eliminar error
        guardarError(false)
        

         //Habilitar Spinner
         guardarSpinner(true)
         
         setInterval( () => {
            const total = CalcularTotal (cantidad, plazo);
       

            guardarTotal(total)

            //Desabilitar Spinner

            guardarSpinner(false)
         }, 2000 )

        //Enviar form



    }

    return (
        <Fragment>
            <form onSubmit={enviarSubmit}>
                <div className="row">
                    <div>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={e => guardarcantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={e => guardarPlazo(parseInt(e.target.value))}
                        >
                            <option value=''>Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}

        </Fragment>

    )
}

export default Formulario
