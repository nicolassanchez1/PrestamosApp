import React, {useState} from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario';
import Mensaje from './Components/Mensaje'
import Resultado from './Components/Resultado'
import { Fragment } from 'react';
import Spinner from './Components/Spinner';
function App() {

    //Defininar UseState
    const [cantidad, guardarcantidad] = useState(0)
    const [plazo, guardarPlazo] = useState('')
    const [total, guardarTotal] = useState(0)
    const [cargando , guardarSpinner] = useState(false)

    //Carga de componentes condicionales

    let componentes;
    if (cargando){
        componentes = <Spinner />
    }else if (total === 0){
      componentes = <Mensaje />
    }else{
      componentes = <Resultado 
          total = {total}
          plazo = {plazo}
          cantidad = {cantidad}
      />
    }

  return (
    <Fragment>
      < Header
          titulo = "Cotizador de Prestamos"
      />
        
        <div className="container">
          <Formulario 
            cantidad = {cantidad}
            guardarcantidad = {guardarcantidad}
            plazo = {plazo}
            guardarPlazo = {guardarPlazo}
            total = {total}
            guardarTotal = {guardarTotal}
            guardarSpinner = {guardarSpinner}
          />

          <div className="mensajes">
              {componentes}
          </div>
        </div>
    </Fragment>
  );
}

export default App;
