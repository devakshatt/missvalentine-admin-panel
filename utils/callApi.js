import axios from 'axios';
import { baseURL } from './projectSettings';

export const setAuthHeaderAxios = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const callApi = async ({ method = 'get', url, data, options }) => {
    try {
        console.log('Making https request', method, url, data, options);
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
        return await axios({
            method,
            url,
            baseURL: baseURL,
            data,
            headers: headers,
        })
    } catch (err) {
        console.log(JSON.stringify(err, null, 2));
        return err;
    }
};
