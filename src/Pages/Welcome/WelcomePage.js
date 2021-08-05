import React from "react";
import { useSelector } from "react-redux";
import { useHistory  } from "react-router-dom";

const WelcomePage = () => {

    let loginToken = useSelector( state => state.loggedInUser.token );
    let history = useHistory();
    if(!loginToken) {
        history.push("/login");
    }

    return(
        <div className="main-container">
            <div className="side-col"></div>
            <div className="center-col">
                <h1>Welcome to the Portal</h1>
            </div>
            <div className="side-col"></div>
        </div>
    )
}

export default WelcomePage;