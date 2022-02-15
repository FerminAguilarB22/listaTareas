import React, { Component } from 'react';
// si escribo rcc se crea el classComponent
class Titulo extends Component {
    render() {
        return (
            <h1 className="display-2 text-center mt-4">Lista de tareas</h1>
        );
    }
}

export default Titulo;