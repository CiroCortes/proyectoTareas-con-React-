/**
 * ejemplo uso de metodo componentedIDUPDATE componente clse
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en sus componentes privados')
    }
  render() {
    return (
      <div>
      <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en sus componentes privados')
        
    } );
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


