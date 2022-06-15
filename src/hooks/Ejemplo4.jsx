/***
 * Ejemplo para enterder el uso de prop.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
           <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
           <h2>
               Nombre: { props.nombre}
           </h2>
           {/** props.chiledren pintara por defecto aquello que se encientre las eqtiquetas de apertura y
           cierre de este componente desde el componente de orden superior
             */}
             {props.children}
        </div>
    );
}

export default Ejemplo4;
