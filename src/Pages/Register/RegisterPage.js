import React from "react";
import Register from "../../Components/Register/Register";

const RegisterPage = () => {

    const handleSubmit = (args) => {
        console.log("in Handle Submit");
        console.log(args);

    }

    const handleChange = (args) => {
        console.log("in Handle Change");
        console.log(args);

    }

    return(
        <div className="main-container">
            <div className="side-col"></div>
            <Register 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <div className="side-col"></div>
        </div>
    )
}

export default RegisterPage;