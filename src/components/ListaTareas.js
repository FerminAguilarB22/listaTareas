import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup className='mt-5'>
        {
          props.arregloTareas.map((item , posicion)=><ItemTarea key = {posicion} tarea = {item} borrarTarea = {props.borrarTarea}></ItemTarea>) // si la funcion es de una sola linea, el return y las llaves no se ponen
        }
        
    </ListGroup> 
  );
};

export default ListaTareas;
