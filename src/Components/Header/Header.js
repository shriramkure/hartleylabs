import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import "./Header.scss";
import { resetToken } from "../../Features/LoggedInUser/loggedInUserSlice";

const Header = () => {
    let loginToken = useSelector( state => state.loggedInUser.token );
    const history = useHistory();
    const dispatch = useDispatch();

    function handleLogout () {
        dispatch(resetToken());
        history.push("/login");
    }

    return(
        <div className="header">
            <div className="logo">
            </div>
            <div className="navbar">
                <ul className="navigationList">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                        { loginToken ? <li> <Link to="/welcome">Welcome</Link> </li>: null }
                        { loginToken ? <li> <Button color="primary" onClick={ handleLogout }>Logout</Button> </li>: null }
                        { !loginToken ? <li> <Link to="/login">Login</Link> </li>: null }
                        { !loginToken ? <li> <Link to="/register">Register</Link> </li>: null }
                </ul>
            </div>
        </div>
    )
}

export default Header;