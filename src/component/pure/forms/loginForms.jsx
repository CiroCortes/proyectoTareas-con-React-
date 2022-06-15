/**
 * componente que va a contener un formulario para autenticacion de usuario
 */

import React, { useEffect, useState } from 'react';

const LoginForms = () => {

    const initialsCredentials=[
        {
            user: '',
            password:'' 
        }
    ];

    const [credentials, setCredentials] = useState(initialsCredentials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForms;
