import { useState } from "react";
import { login } from "../services/authApi";
import React, { useContext, useEffect } from 'react';

import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { setAuthHeaderAxios } from "../utils/callApi";
import AppContext from "../AppContext";

export default function Login() {
    const router = useRouter()
    const context = useContext(AppContext);
    const { setAuth, state } = context;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeHandler = (event) => {
        event.target.name === 'email'
            ? setEmail(event.target.value)
            : setPassword(event.target.value);
    };

    useEffect(() => {
        console.log('Login', state);

        // redirect to home if already logged in
        if (state.auth.authStatus) {
            router.push('/dashboard');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => { }, []);
    // const handleLogin = async (e) => {
    //     try {
    //       e.preventDefault()
    //       //   if (!EmailReg.test(email)) {
    //       //     toast.error('Please enter a valid email!')
    //       //     return
    //       //   }
    //       const dataToSend = { email, password }
    //       const response = await callApi({
    //         method: 'post',
    //         url: '/auth/login',
    //         data: dataToSend,
    //       })
    //       if (response && response.status == 200) {
    //         toast.success('Welcome👌')
    //         const userAuthData = {
    //           user: response.data.user,
    //           authToken: response.data.token,
    //         }
    //         dispatch(setUserAuthAction(userAuthData))
    //         closeModal()
    //         router.push('/shop/all')
    //       } else {
    //         toast.error('Invalid Email or password!🤯')
    //       }
    //     } catch (error) {
    //       console.log(error)
    //       toast.error("Could'nt Login right now! 🤯")
    //     }
    //   }
    const submitHandler = async (e) => {
        try {
            e.preventDefault()
            const { data } = await login(
                email,
                password)
            console.log("Authent pre", data)

            if (data && data.token) {
                console.log("Authent", data);
                setAuth({ user: data.user, token: data.token, authStatus: true })
                router.push("/dashboard");
                setAuthHeaderAxios(data.token)
                toast.success('Welcome👌')
            } else {
                toast.error('Invalid Email or password!🤯')
            }
        } catch (error) {
            toast.error("Could'nt Login right now! 🤯")
        }

    };

    return (
        <div className="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="card">
                        <div className="card-header bg-primary">
                            <div className="ec-brand">
                                <h2 className="text-white text-center py-4">Admin Panel</h2>
                            </div>
                        </div>
                        <div className="card-body p-5">
                            <h4 className="text-dark mb-5">Sign In</h4>
                            <div className="row">
                                <div className="form-group col-md-12 mb-4">
                                    <input name="email"
                                        onChange={changeHandler}
                                        value={email} type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-12 ">
                                    <input
                                        name="password"
                                        onChange={changeHandler}
                                        value={password}
                                        type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="col-md-12">
                                    <div className="d-flex my-2 justify-content-between">
                                        <div className="d-inline-block mr-3">
                                            <div className="control control-checkbox">Remember me
                                                <input type="checkbox" />
                                                <div className="control-indicator" />
                                            </div>
                                        </div>
                                        <p><a className="text-blue" href="#">Forgot Password?</a></p>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={submitHandler}>Sign In</button>
                                    <p className="sign-upp">Don't have an account yet ?
                                        <a className="text-blue" href="sign-up.html">Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
