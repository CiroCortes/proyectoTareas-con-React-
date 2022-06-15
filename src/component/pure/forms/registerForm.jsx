import React,{ useState } from 'react';

const RegisterForm = () => {


    const initialsData=[
        {
            user: '',
            name:'',
            email:'',
            password:'' 
        }
    ];

    const [data, setData] = useState(initialsData);

    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
