import axios from 'axios';
import { baseURL } from './projectSettings';

export const setAuthHeaderAxios = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const callApi = async ({ method = 'get', url, data, options }) => {
    try {
        console.log('http', data);
        const auth = null;
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (auth) {
            const { user, token } = auth;
            headers = { ...headers, Authorization: `Bearer ${token}` };
        }
        if (options && options.headers) {
            headers = { ...headers, ...options.headers };
        }
        const res = await axios({
            method,
            url,
            baseURL: baseURL,
            data,
            headers: headers,
        })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
        return res;
    } catch (err) {
        console.log(err);
        return err;
    }
};
