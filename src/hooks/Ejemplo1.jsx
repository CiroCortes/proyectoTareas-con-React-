/**
 * Ejemplo de uso del hook state
 * crear un componente de tipo funcíon y acceder a su estoado
 * privado a través de un hook y , ademas de poder modificarlo
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {
    // valor inicial para un contador
    const valorInicial = 0;
    // valor inicial para una persona
    const personaInicial ={
        nombre: 'ciro', 
        email: 'ciro.720@gmail.com'

    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL , sean 
     * parte del estado del componente, para aso poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente,
     * 
     * const [ nombreVariable,funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * funcio para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        //
        setContador(contador+1);

    }
    /**
     * funcio para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'pepe',
                email:'pepe@gmail.com'
            }
        )

    }
    /**
     * 
     */
            
    return (
        <div>
        <h1>*** ejemplo de useState() ***</h1>
        <h2>CONTADOR : {contador}</h2>
        <h2>DATOS DE LA PERSONA</h2>
        <h3>Nombre : {persona.nombre}</h3>
        <h4>Email : {persona.email}</h4>
        {/*Bloque de botones para actualzar el estado*/}
        <button onClick={incrementarContador}>incremetar contador</button>
        <button onClick={actualizarPersona}>actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
