import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useFormFields } from "../Utils";

function SignUp() {
    const history = useHistory()
    const [fields, handleFieldChange] = useFormFields({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleSubmit(e){
        e.preventDefault();
        RegistrationValidation();
        // window.location.reload();
    }

    function RegistrationValidation(){
        // make sure password fields are matching
        if (fields.password === fields.confirmPassword){
            // ghetto way to simulate a registration Backend
            // using localStorage

            // add user data to localStorage
            localStorage.setItem("username", fields.username)
            localStorage.setItem("email", fields.email)
            localStorage.setItem("password", fields.password)

            // assign new token to user
            let generator = require('generate-password');
 
            let newToken = generator.generate({
                length: 20,
                numbers: true,
                symbols: true,
            });

            localStorage.setItem("token", newToken);

            // redirect to `welcome` page
            history.push("/welcome");

        } else {
            alert("Password don't match");
        }
    }

    return (
        <>
            <div>
                Already Registered?
                <Link to="/login">go to login</Link><br/>
            </div>
            <br/><br/>
            <div className="container mt-5">
                <div className="signUpForm">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group role="form" size="sm" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="username"
                                value={fields.username}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="email"
                                value={fields.email}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                value={fields.password}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                value={fields.confirmPassword}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default SignUp;
