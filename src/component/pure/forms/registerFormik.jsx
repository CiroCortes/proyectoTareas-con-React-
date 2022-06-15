import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//importacion de modelos
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();
    
    const initialValues ={
        
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm pass
        role :ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
           username: Yup.string()
                     .min(6, 'User name too short') 
                     .max(12,'user name too long')
                     .required('User name is required'),
           email: Yup.string().email('Invalid email format ')
                     .required('Email id required'),
           role : Yup.string()
                     .oneOf([ROLES.USER, ROLES.ADMIN],'You must select correct a Role : User / Admin')
                     .required('Role is required'),          
           password:   Yup.string()
                     .min(8, 'password too short')   
                     .required('password id requerided'),
                    
           confirm: Yup.string()
           .when("password",{
            is: value => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf(
                 [Yup.ref("password")],
                 '¡password must match!'

            )
           }).required('you must confirm the password')          
        }

    )

    const submit = (values) =>{
        alert('Register user')
    }



    return(
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues} 
                //** yup validation schema */
                validationSchema = {registerSchema}
                   //** on submit events */ 
                onSubmit={async (values) => {
                   await new Promise((r) => setTimeout(r, 1000));
                   alert(JSON.stringify(values, null, 2));
                  
                }}          

            >
            {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) =>(
                        <Form>
                             <label htmlFor="username"> Username</label>
                             <Field id="username" type ="text" name="username" placeholder="your username" />
                             {/**Username errors */}
                             {
                                errors.username && touched.username &&
                                (
                                    <ErrorMessage name="username" component='div'></ErrorMessage>
                                )
                             }

                             <label htmlFor="email">Email</label>
                             <Field id="email" type ="email" name="email" placeholder="example@email.com" />
                             {/**Username errors */}
                             {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                             }
                             <label htmlFor="password">Password</label>
                                <Field
                                     id="password"
                                     name="password"
                                     placeholder="password"
                                     type="password"
                                 />
                                {    
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                                }

                            <label htmlFor="confirm">Confirm</label>
                                <Field
                                     id="confirm"
                                     name="confirm"
                                     placeholder="Confirm password"
                                     type="password"
                                 />
                                {    
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                                }   
                            


                           <button type="submit">Register Acount</button> 
                           {isSubmitting ? (<p>Sending your credentials...</p>): null} 

                        </Form>
                    )
            }        
            

            </Formik>
            
        </div>
    );
}

export default RegisterFormik;
