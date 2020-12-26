import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from './NavBar';

function Profile() {
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(() => {
        // validate token or redirect to 404 Page
        if (typeof(token) === undefined || token === null){
            return history.push("/error");
        };
    }, []);

    // ghetto way to get user profile * I know
    const username = localStorage.getItem("username");
    const fistName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");

    return (
        <>
            <NavBar>
                <div className="profile-page mt-3 text-center">
                    <h2>Profile</h2>
                </div>
                <div className="profile-image-section mt-3 text-center">
                    Image
                </div>
                <hr className="line-separator"/>
                <br/>
                <div className="profile-details text-center">
                    Username : <b>{username}</b><br/><br/>
                    First Name : <b>{fistName}</b><br/><br/>
                    Last Name : <b>{lastName}</b><br/><br/>
                    Email : <b>{email}</b><br/><br/>
                </div>
                <br/>
                <div className="container">
                    <Button type="button" onClick={() => history.push("/updateprofile")} block size="sm" type="submit">
                        <b>Update</b>
                    </Button>
                </div>
            </NavBar>
        </>
    )
}

export default Profile;
