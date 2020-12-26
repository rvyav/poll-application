import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";

function Welcome() {
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(() => {
        // validate token or redirect to 404 Page
        if (typeof(token) === undefined || token === null){
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
