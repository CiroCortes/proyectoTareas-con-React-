import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('componenete va a actualizado')

        const intervaloID = setInterval (()=>{
            document.title = `${new Date()}` 
            console.log('actualizacion del componente');
        }, 1000)
        return () => {
            console.log('componenete va a desaparcer');
            document.title = "tiempo detenido";
            clearInterval(intervaloID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
