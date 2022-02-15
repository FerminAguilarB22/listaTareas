import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareas')) || [];

  // Crear los states
  const [tareaIndividual, setTareaIndividual] = useState('');
  const [tareas, setTareas] = useState(tareasLocalStorage);
  // const altaTarea = (e)=>{
  //   console.log(e.target.value);
    // Como guardamos dentro del state
  //   setTareaIndividual(e.target.value);
  // }

    // Usar el ciclo de vida de un componente
    useEffect(()=>{ 
      // esta logica se ejecuta en montaje y actualizacion
      console.log('desde useEffect');
      localStorage.setItem('arregloTareas', JSON.stringify(tareas));
    }, [tareas]); // si el segundo parametro es '[]' solo se ejecuta useEffect en fase de montaje
      
  const handleSubmit = (e) =>{
    e.preventDefault();
    // guardar una tarea en el arreglo de tareas
    setTareas([...tareas, tareaIndividual]);
    // limpio el input
    setTareaIndividual('');

  }

  const borrarTarea = (nombre) =>{
    let arregloModificado = tareas.filter((item)=> item !== nombre);
    // console.log(arregloModificado);
    setTareas(arregloModificado);
  }


  return (
    <>
      <Form className='container mt-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => {setTareaIndividual(e.target.value)}}
          value = {tareaIndividual} />
          <Button variant='dark' type='submit' className='ms-3'>Agregar</Button>
        </Form.Group>
      </Form>
      <section className='container'>
          <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
