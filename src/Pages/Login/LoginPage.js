import React from "react";
import Login from "../../Components/Login/Login";
import {loginToPortal} from "../../Features/LoggedInUser/loggedInUserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory  } from "react-router-dom";

const LoginPage = () => {

    let loginToken = useSelector( state => state.loggedInUser.token );
    let history = useHistory();
    if(loginToken) {
        history.push("/welcome");
    }
    
    const  dispatch = useDispatch();
    function handleLogin(APICallOptions) {
        dispatch(loginToPortal(APICallOptions));
    }

    return(
        <div className="main-container">
            <div className="side-col"></div>
            <Login handleLogin={handleLogin} />
            <div className="side-col"></div>
        </div>
    )
}

export default LoginPage;