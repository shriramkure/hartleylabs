import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginToPortal = createAsyncThunk(
    "loggedInUser/loginToPortal",
    async (apiCallOptions, getState) => {
        return await axios(apiCallOptions).then(
            (response) => response.data.token
        )
    }
)

const loggedInUserSlice = createSlice({
    name: "loggedInUser",
    initialState: {
        token: null
    },
    reducers: {
        resetToken: (state) => {
            state.token = "";
        }
    },
    extraReducers: {
        [loginToPortal.pending]: (state, action) => {
            //handle state variables for pending promise here.
        },
        [loginToPortal.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
        [loginToPortal.rejected]: (state, action) => {
            //handle state variables for rejected / failed promise here.
        }
    }
});

export const {resetToken} = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;