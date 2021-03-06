import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        // alert(`Submitting Data ${email} ${password}`);
        UserAuth()
        // force form to refresh
        window.location.reload();
    }

    // function UserAuth(){
    //     for (const user of users){
    //         if (user.email === email){
    //             history.push("/welcome");
    //             break
    //         } else {
    //             alert("email not found");
    //             break
    //         }
    //     };
    // }

    function UserAuth(){
        if (localStorage.getItem("email") === email){
            history.push("/welcome");
        } else {
            alert("email not found");
        }
    }

    return (
        <>
            <div className="Top">
                Not Registered Yet?
                <Link to="/signup">go to SignUp</Link><br/>
            </div>
            <br/><br/>
            <div className="container mt-5">
                <div className="Login">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group role="form" size="sm" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group role="form" size="sm" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

export default Login;
