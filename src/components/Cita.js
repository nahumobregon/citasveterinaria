import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita,eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span></span> {cita.mascota} </p>
        <p>Propietario: <span></span> {cita.propietario} </p>
        <p>Hora: <span></span> {cita.hora} </p>
        <p>Fecha: <span></span> {cita.fecha} </p>
        <p>Sintomas: <span></span> {cita.sintomas} </p>
        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) }
        >
            Eliminar &times;
        </button>
    </div>
)

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita