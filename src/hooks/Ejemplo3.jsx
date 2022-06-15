/**
 * Ejemplo Hooks
 * -useState()
 * -useState()
 */

import React,{useState, useContext} from 'react';
/**
 * 
 * @returns componente1
 * dispone de un contexto que va atener un valor que recibe el padre
 */
const miContexto  = React.createContext(null)

const Componente1 = () => {

    const state =  useContext(miContexto);
    
    return (
        <div>
        <h1>
            el token es : {state.token}
        </h1>
        {/**pintamos el componente 2 */}
        <Componente2/>
            
        </div>
    );
}

const Componente2 = () => {

    const state =  useContext(miContexto);


    return (
        <div>
        <h2>
            la sesion es : {state.sesion}
        </h2>
            
        </div>
    );
}


export default function MicomponenteConConContexto () {

    const estadoInicial = {
        token:'123456',
        sesion: 1
    }
    // creamos el estado de este componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizasSesion(){
        setSessionData(
            {
                token: 'JWMDR12455678',
                sesion: sessionData.sesion +1 
            
            }
        )
    }
  return (
    <miContexto.Provider value={sessionData}>
    {/*todo lo que este aqui puede leer datos de sessionData */}
    {/**ademas, si se actualiza, los componentes de aqui, tambien lo actualizan */}
    <h1>
            ***Ejemplo de useState() y useContext()
        </h1>
    <Componente1></Componente1>
    <button onClick={actualizasSesion}>Actualizar la sesion</button>
    </miContexto.Provider>

   
  )
}

