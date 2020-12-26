import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function UpdateProfile() {
    const token = localStorage.getItem("token");
    const history = useHistory();

    const [fields, setField] = useState({
        // ghetto way to get user profile * I know
        username: localStorage.getItem("username"),
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        email: localStorage.getItem("email"),
    });

    function handleSubmit(e){
        e.preventDefault();
        /* 
        update user data to localStorage
        from user input
        */
        localStorage.setItem("username", fields.username)
        localStorage.setItem("firstName", fields.firstName)
        localStorage.setItem("lastName", fields.lastName)
        localStorage.setItem("email", fields.email)

        // redirect to `welcome` page
        history.push("/profile");

        // reload the page
        //window.location.reload();
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setField(fields => ({ ...fields, [name]: value }));
    };

    /*
    As you know, useState is async function.
    When you use useState inside functional Component,
    you have to handle variable in useEffect to see
    change of variable
    */
    useEffect(() => {
    }, [fields]);

    useEffect(() => {
        // validate token or redirect to 404 Page
        if (typeof(token) === undefined || token === null){
            return history.push("/error");
        };
    }, []);

    return (
        <>
            <div className="profile-page mt-3 text-center">
                <h2>Profile</h2>
            </div>
            <div className="profile-image-section mt-3 text-center">
                Image
            </div>
            <hr className="line-separator"/>
            <div className="container mt-5">
                <div className="Profile">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group role="form" size="sm" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="text"
                                name="username"
                                value={fields.username}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="email">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="text"
                                name="firstName"
                                value={fields.firstName}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="password">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                value={fields.lastName}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="confirmPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                value={fields.email}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile
