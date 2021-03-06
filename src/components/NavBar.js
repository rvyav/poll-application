import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props) {

    let userAuthenticated;

    if (localStorage.getItem("token") !== null){
        // log out is so ghetto, I know
        userAuthenticated = (
            <>
                <Navbar.Brand href="/welcome">Poll-App</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav.Link href="/welcome">Home</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/">Log Out</Nav.Link>
            </>
        );

    } else {
        userAuthenticated = (
            <>
                <Navbar.Brand href="/">Poll-App</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </>
        );
    };

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    {userAuthenticated}
                </Navbar>
                {props.children}
            </>
        </div>
    )
}

export default NavBar;
