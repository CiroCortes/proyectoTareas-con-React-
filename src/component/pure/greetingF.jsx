import React, {useState} from 'react';
import PropTypes from 'prop-types';



const GreetingF = (props) => {

    // breve introduccion a useState
    // onst [variable , metodo para actualizarlo] = useState(29 "valor iniciado");
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualixamos el state
        setage(age + 1);

    }

    return (
        <div>
             <h1>
                HOLA { props.name } desde componente funcional!
              </h1>
                <h2>
                   tu edad es de :  { age } 
                </h2>
                <div>
                    <button onClick={birthday}>
                       Cumplir años 
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string

};


export default GreetingF;