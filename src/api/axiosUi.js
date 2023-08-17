import axios from "axios";
import queryString from "query-string";

import {apiConfig ,baseUrl} from "./apiConfig";


const axiosUi = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },

    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});


axiosUi.interceptors.request.use(async (config) => config);

axiosUi.interceptors.response.use((res) => {

        if (res && res.data) {
            return res.data
        }
        return res

    }, (error) => {
        throw error;
    }


);

export default axiosUi





