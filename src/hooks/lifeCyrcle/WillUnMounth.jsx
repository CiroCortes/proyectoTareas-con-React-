/**
 * Ejemplo de uso del metofo del componente WillUnMounth para componente clase
 * Ejemplo de uso del hook para componente funcional
 * (cuando el componente va a desapárecer)
 */
import React, { Component, useEffect } from 'react';

 export class WillUnMounth extends Component {
     componentWillUnmount(){
         console.log('Componente antes de que el componenente desaparezca')
     }
    render() {
        return (
            <div>
                WillUnMounth
            </div>
        );
    }
}



export const WillUnMounthHook = () => {
    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log('Componente antes de que el componenente desaparezca')
        };
    }, []);

    return (
        <div>
            <hi>
            WillUnMounth
            </hi>
        </div>
    );
}





