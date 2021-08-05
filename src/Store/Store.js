import { configureStore } from "@reduxjs/toolkit";
import loggedInUserReducer from "../Features/LoggedInUser/loggedInUserSlice";

const Store = configureStore({
    reducer: {
        loggedInUser: loggedInUserReducer
    }
});

export default Store;