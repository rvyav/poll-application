import React, { useEffect, useReducer } from 'react';
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";
import { Data } from "./Data";
import { Card } from 'react-bootstrap';


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
        <>
            <NavBar/>
            <div className="container">
                {Data.map((data) => (
                <div className="questions" key={data.id}>
                    <div className="question-title"><b>{`${data.id}`}</b> - {`${data.question}`}</div>
                    <div className="question-title buttons">
                        <div className="button vote">Vote</div>
                        <div className="button view-results">View Results</div>
                    </div>
                </div>))}
            </div>
        </>
    )
}

export default Welcome;
