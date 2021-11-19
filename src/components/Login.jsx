import React,{useState, useContext} from 'react'
import { Context } from '../context/ContextHeroes'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
const Login = () => {
    const {setUser} = useContext(Context)
    const [error, setError] = useState(false)
    const history = useHistory()
    return (
        <div className="d-flex flex-column align-items-center">
         <Formik 
           initialValues={{
               email : "",
               password: ""
           }}
           validate={({email,password})=> {
               let errors = {}
               if(!email){
                   errors.email = "Please enter an email"
               }
               if(!password){
                   errors.password = "Please enter a password"
               }
               return errors

           }}
           onSubmit={async ({email,password}) =>{
             const resp = await fetch("http://challenge-react.alkemy.org",{ 
                method: "POST",  
                body: JSON.stringify ({
                       email: email,
                       password: password
                    }),
               headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if(resp.status !== 200) {
                setError(true)
                setUser(false)
           }else{
               setError(false)
               setUser(true)
               history.push("/")
               const data = await resp.json()
               localStorage.setItem("token", data.token)
               return data
           }
        }}
           >
        {({ errors}) =>( 
        <Form className="card border-primary mt-5 fs-5 p-4"> 
        <h4>Login</h4>
        <hr/>
            <div className="row mb-3 ">
                <label 
                htmlFor="email" 
                className="col-sm-5 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                <Field 
                type="email" 
                className="form-control" 
                id="email"
                name="email"
                autoComplete="off"
                />
                <ErrorMessage name="email" component={()=> <p className="text-danger">{errors.email}</p>}/>
                </div>
            </div>
            <div className="row mb-3">
                <label 
                htmlFor="password" 
                className="col-sm-5 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                <Field 
                type="password" 
                className="form-control" 
                name="password"
                autoComplete="off"
                id="password"/>
                <ErrorMessage name="password" component={()=> <p className="text-danger">{errors.password}</p>}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
            </Form>
               )  }
            </Formik>
            {error &&  
             <div className="fs-2 alert alert-danger mt-5 text-center" role="alert">
               Wrong email or password
             </div>}
        </div>
    )
}

export default Login
