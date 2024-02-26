import React from "react";
import axios from "axios";

function GetData() {

    const apiData = async () => {
        const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
        console.log(response.data);
    }

    apiData();

    return apiData;
}

export default GetData;