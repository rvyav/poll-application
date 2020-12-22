import React, { useEffect } from 'react'
// import { users } from './Data';
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";

function Welcome() {
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(() => {
        // validate token or redirect to 404 Page
        if (token === undefined || token === null){
            return history.push("/error");
        };
    }, []);
    
    return (
        <div>
            <NavBar/>
        </div>
    )
}

export default Welcome;
