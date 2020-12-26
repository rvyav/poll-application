import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>Welcome to Home Page</div>
            <Link to="/login">go to Login</Link><br/>
            <Link to="/signup">go to Register</Link><br/>
            
        </div>
    )
}

export default Home;
