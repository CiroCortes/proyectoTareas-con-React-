import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup'

// aqui usamos yup, el cual valida el registro(parecido a un proptype) donde shape permite espicificar la estructura de un objeto
const loginSchema =     Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format ')
                    .required('Email id required'),
        password:   Yup.string()
                    .required('password id requerided')
    }
)

const LoginFormik = () => {

    const initialCredentials ={
        email:'',
        password:''

    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={ initialCredentials }
                //** yup validation schema */
                validationSchema = {loginSchema}
                onSubmit={async (values) => {
                   await new Promise((r) => setTimeout(r, 1000));
                   alert(JSON.stringify(values, null, 2));
                   // we save the data in the locastorage
                   localStorage.setItem('credentials', values)
                }}
            >
            {/**we obtain props from Formi */}
            {props =>{
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                } = props
                return(
                    <Form>
                      <label htmlFor="email">Email</label>
                         <Field id="email" type ="email" name="email" placeholder="example@email.com" />

                            {
                                errors.email && touched.email &&
                                (
                                   <div className='error'>
                                    <p>{errors.email}</p>
                                   </div> 
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
                                   <div className='error'>
                                    <p>{errors.password}</p>
                                   </div> 
                                )
                            }
             <button type="submit">Login</button> 
             {isSubmitting ? (<p>login your credentials...</p>): null} 
            </Form>

                )
            }}
            

            </Formik>
        </div>
       
    );
}

export default LoginFormik;
