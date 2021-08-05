import React from "react";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import WelcomePage from "./Pages/Welcome/WelcomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router,
         Route,
         Switch
        } from "react-router-dom";

import "./app.scss";

const App = () => {
    return(
        <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/welcome">
                    <WelcomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
            </Switch>
            <Footer />
        </div>
        </Router>
    )
}

export default App;