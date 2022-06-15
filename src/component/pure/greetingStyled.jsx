import React,{ useState } from 'react';
// definienfo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle ={
    color:'white'
}; 
// ? Estilo para usuario no logueado
// considerar que la sontaxis para ccs llevaria un "-" en medio de la palabra
// pero aqui se usa el camelCase
const unloggedStyle={
    color: 'tomato',
    FontWeight: 'bold'
}

const GreetingStyled = (props) => {

// Generamos un estado para el componente 
// y asi controlar si el usuario esta o no logueado    
    const [logged, setlogged] = useState(false)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        {logged ? 
        (<p> Hola, {props.name}</p>)
         :
          (<p>Please login</p>) }
        
        <button onClick={()=>{
            console.log('Botón pulsado');
            setlogged(!logged);
        }}>
            { logged ? 'Logout' : 'Login'}
        </button>

            
        </div>
    );
}

export default GreetingStyled;
