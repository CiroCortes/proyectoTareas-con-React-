/**
 * Ejemplo de uso de vida del metodo
 * de clico de vida del componente fde clase y el hook de clico de vida 
 * en componente funcional
 */
import React, { Component, useEffect} from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }
    render() {
        return (
            <div>
            <h1>DidMount</h1>
                
            </div>
        );
    }
}



 export const DidMountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que el componente sea añadido al DOM (renderice)')
     
    }, []);
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}



