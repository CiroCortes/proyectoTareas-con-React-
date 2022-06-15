/**
 * Ejemplo de usoo de:
 * -useState()
 * -useRef()
 * -useEffect()
 */
import React,{useEffect,useState,useRef} from 'react';

const Ejemplo2 = () => {
    // Vamos a crear 2 contadores distintos
    // Cada uno con estados distintos
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    // vamos a crear una referencia con useRef() para asociar un variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }
    function incrementar2(){
        setContador2(contador2 + 1)
    }
    /**
     * Trabajando con UseEffect
     * ? caso 1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio  en el estao del componente
     * se ejecuta aquello que este dentro del useEffect
     */
//    useEffect(() => {
//        console.log('CAMBIO EN EL ESTADO DEL OBJETO');
//        console.log('Mostrando referencia del estado del DOM');
//        console.log(miRef);
//     });

/**
 * ? caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
 * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
 *  En caso de que cambie contador2, no habra ejecución
 */
useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL OBJETO');
    console.log('Mostrando referencia del estado del DOM');
    console.log(miRef);
    }, [contador1]);

/**
 * ? caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
 * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
 *  En caso de que cambie contador2, no habra ejecución
 */

 useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
    console.log('Mostrando referencia del estado del DOM');
    console.log(miRef);
    }, [contador1,contador2]);



    return (
        <div>
        <h1>*** ejemplo de useState(), useRef() y useEffect() ***</h1>
        <h2> CONTADOR 1 : {contador1} </h2>
        <h2> CONTADOR 2 : {contador2} </h2>
        {/*elemento referenciado*/}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/*botones para cambiar los contadores */}
        <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
            
        </div>
    );
}

export default Ejemplo2;
