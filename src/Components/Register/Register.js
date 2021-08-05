import React from "react";
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import SignupSchema from "../../Helpers/SignupSchema";
import { OutlinedInput } from '@material-ui/core';
import APICall from "../../API/API";

class Register extends React.Component {

    render() {

        return(
            <div className="center-col">    
                <div className="full-row">
                    <h3>Register to Hartley Labs portal</h3>
                </div>

                <Formik
                    initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        let APICallOptions = {
                            url: "https://reqres.in/api/register",
                            method: "post",
                            data: values
                        };

                        let registrationResponse = APICall(APICallOptions);
                        console.log(registrationResponse);
                    }}> 

                    {({ errors, touched }) => (
                        <Form>
                          <Field name="firstName" placeholder="First Name" className="text-field" as={OutlinedInput}/>
                          {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                          ) : null}
                          <Field name="lastName" placeholder="Last Name" className="text-field" as={OutlinedInput}/>
                          {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                          ) : null}
                          <Field name="email" placeholder="E-Mail" type="email" className="text-field" as={OutlinedInput}/>
                          {errors.email && touched.email ? <div>{errors.email}</div> : null}
                          <Field name="password" placeholder="Password" type="password" className="text-field" as={OutlinedInput}/>
                          {errors.password && touched.password ? <div>{errors.password}</div> : null}
                          <Field name="confirmPassword" placeholder="Confirm Password" type="password" className="text-field" as={OutlinedInput}/>
                          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
                          <div className="full-row">
                            <Button 
                            variant="contained" 
                            color="primary"
                            fullWidth={true}
                            type="submit"
                            disableElevation>
                                Register
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                    </div>
        )
    }
}

export default Register;