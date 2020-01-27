import React,{Fragment, useState} from 'react';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

//            Props crearCita
const Formulario = ({crearCita}) =>{

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''
    });

    const [error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada que 
    //el usuario escribe en el input
    const actualizarState= e =>{
        //console.log('escribiendo...')
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {mascota , propietario, fecha, hora, sintomas} = cita

    //cuando el usuarip presiona enviarFormulario
const submitCita = e =>{
    e.preventDefault()
    console.log(mascota)
    //validar
    if(mascota.trim()==='' || propietario.trim()==='' 
    || fecha.trim()==='' || hora.trim()===''
    || sintomas.trim()===''){
        actualizarError(true)
        return
    }

    actualizarError(false)

    //asignar id
    cita.id = uuid()
    //console.log(cita)

    //crear la cita
    crearCita(cita)

    //reiniciar el form
    actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''    
    })
}

    return (
       <Fragment>
           <h2>Crear Cita</h2>
           {
           error 
           ? 
           <p className="alerta-error">Todos los campos son obligatorios</p>
           : 
           null
           }
           <form
            onSubmit={submitCita}
           >
               <label>Nombre Mascota</label>
               <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
               />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    type="tet"
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
           </form>
       </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario
