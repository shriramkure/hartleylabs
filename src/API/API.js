import axios from "axios";

const APICall = async (apiCallOptions) => {
    let response = await axios(apiCallOptions);
    let data = await response.data;

    return data;
}

export default APICall;