import React from "react";
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import LoginSchema from "../../Helpers/LoginSchema";
import { OutlinedInput } from '@material-ui/core';


class Login extends React.Component {

    render() { 
        
        return(
            <div className="center-col">     
            <div className="full-row">
                <h3>Login to Hartley Labs portal</h3>
            </div>

            <Formik
            initialValues={{
            email: '',
            password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
                let APICallOptions = {
                    url: "https://reqres.in/api/login",
                    method: "post",
                    data: values
                };

                this.props.handleLogin(APICallOptions);
            }}> 

            {({ errors, touched }) => (
                <Form>
                  <Field name="email" placeholder="E-Mail" type="email" className="text-field" as={OutlinedInput}/>
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  <Field name="password" placeholder="Password" type="password" className="text-field" as={OutlinedInput}/>
                  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                  <div className="full-row">
                    <Button 
                    variant="contained" 
                    color="primary"
                    fullWidth={true}
                    type="submit"
                    disableElevation>
                        Login
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
        </div>
        )
    }
}

export default Login;