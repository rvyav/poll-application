import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props) {

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/welcome">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar>
                {props.children}
            </>
        </div>
    )
}

export default NavBar;
