import React , {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales=[]
  }

  //Arreglo de Citas
  const [citas,guardarCitas] = useState(citasIniciales)

  //use Effect para realizar ciertas operaciones cuando el state cambia
  // se ejecuta cuando el state esta listo o sufre cambios
  useEffect( ()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }

  }, [citas])
  //para que use Effect no se este ejecutando cada que hay cambios
  //se le pasa un arreglo vacio []
  //se le puede pasar el state, ejemplo [citas] y casa que 
  // el state [citas] sufra cambios, se va a ejecutar
  //Funcion que toma las citas actuales y agrega una nueva
  //comentarios de prueba
  const crearCita = cita =>{
      guardarCitas([
      ...citas,
      cita
    ])
  }

  //Funcion que elimina una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  // Mensaje Condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario
                //        {crearCita} <- es una funcion que pasa como props
                crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita=>(
                <Cita 
                  key={cita.id}
                  //   {cita} <- es un objeto que pasa como props
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
