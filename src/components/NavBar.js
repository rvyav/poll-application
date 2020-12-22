import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        </div>
    )
}

export default NavBar;