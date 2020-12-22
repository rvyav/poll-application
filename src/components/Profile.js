import React, { useEffect } from "react";
// import { checkUserIsLoggedIn } from "./Utils";
import { useHistory } from "react-router-dom";

function Profile() {
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
            <h2>Profile Page</h2>
        </div>
    )
}

export default Profile;
