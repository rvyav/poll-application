import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>Welcome to Home Page</div>
            <Link to="/about">go to about</Link><br/>
            <Link to="/login">go to login</Link><br/>
        </div>
    )
}

export default Home;
