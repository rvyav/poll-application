import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function About() {
    return (
        <>
            <div>About</div>
            <Link to="/">go to home page</Link>
        </>
    )
}

export default About;
