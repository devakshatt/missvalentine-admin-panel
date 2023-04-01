import { callApi } from '../utils/callApi';

export const login = (email, password) => callApi({
    method: 'post',
    url: `/auth/login`,
    data: {
        email: email,
        password: password,
    }
});

export const signOut = () => (dispatch) => {
    // dispatch({
    //     type: 'SET_AUTH',
    //     payload: {},
    // });
    // localStorage.removeItem('auth');
};
