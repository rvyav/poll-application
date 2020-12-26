import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function About() {
    return (
        <div>
            <NavBar>
                <div>About</div>
                <Link to="/">go to home page</Link>
            </NavBar>
        </div>
    )
}

export default About;
